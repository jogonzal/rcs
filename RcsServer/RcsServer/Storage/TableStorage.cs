using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Table;

namespace RcsServer.Storage
{
	public static class TableStorage
	{
		private static CloudStorageAccount _cloudStorageAccount = CloudStorageAccount.Parse(ServerConfig.AzurePrimaryConnectionString);

		private static ConcurrentDictionary<string, bool> _createdTables = new ConcurrentDictionary<string, bool>();

		public static async Task<bool> InsertIntoTable<T>(string tableName, string partitionId, string keyId, T rowEntity) where T : ITableEntity
		{
			// Create the table client.
			CloudTableClient tableClient = _cloudStorageAccount.CreateCloudTableClient();

			// Retrieve a reference to the table.
			CloudTable table = tableClient.GetTableReference(tableName);

			// Create the table if it doesn't exist.
			if (!_createdTables.ContainsKey(tableName))
			{
				_createdTables.TryAdd(tableName, true);
				await table.CreateIfNotExistsAsync();
			}

			rowEntity.PartitionKey = partitionId;
			rowEntity.RowKey = keyId;

			// Create the TableOperation object that inserts the row entity.
			TableOperation insertOperation = TableOperation.Insert(rowEntity, true);

			Debug.WriteLine("Inserting line!");

			// Execute the insert operation.
			TableResult result;
			try
			{
				result = await table.ExecuteAsync(insertOperation);
			}
			catch (Exception ex)
			{
				Debug.WriteLine("Error while inserting element into table." + ex.ToString());
				throw;
			}

			return result.HttpStatusCode == 201;
		}

		public static async Task<T> GetFromTable<T>(string tableName, string partitionId, string keyId) where T : ITableEntity, new()
		{
			// Create the table client.
			CloudTableClient tableClient = _cloudStorageAccount.CreateCloudTableClient();

			// Retrieve a reference to the table.
			CloudTable table = tableClient.GetTableReference(tableName);

			// Create the table if it doesn't exist.
			if (!_createdTables.ContainsKey(tableName))
			{
				_createdTables.TryAdd(tableName, true);
				await table.CreateIfNotExistsAsync();
			}

			TableOperation retrieveOperation = TableOperation.Retrieve<T>(partitionId, keyId);

			// Execute the query operation.
			TableResult result;
			try
			{
				result = await table.ExecuteAsync(retrieveOperation).ConfigureAwait(false);
			}
			catch (Exception ex)
			{
				Debug.WriteLine("Error while getting element from table." + ex.ToString());
				throw;
			}
			return (T)result.Result;
		}

		internal static async Task<bool> UpdateRowWithEtag<T>(string tableName, string partitionId, T rowEntity) where T : ITableEntity, new()
		{
			string originalEtag = rowEntity.ETag;

			if (string.IsNullOrWhiteSpace(originalEtag))
			{
				throw new ArgumentException("Need ETAG value");
			}

			// Create the table client.
			CloudTableClient tableClient = _cloudStorageAccount.CreateCloudTableClient();

			// Retrieve a reference to the table.
			CloudTable table = tableClient.GetTableReference(tableName);

			// Create the table if it doesn't exist.
			if (!_createdTables.ContainsKey(tableName))
			{
				_createdTables.TryAdd(tableName, true);
				await table.CreateIfNotExistsAsync();
			}

			TableResult result;
			try
			{
				Console.WriteLine("Trying to update blob using orignal etag to generate if-match access condition");
				TableOperation operation = TableOperation.Replace(rowEntity);
				result = await table.ExecuteAsync(operation);
			}
			catch (StorageException ex)
			{
				if (ex.RequestInformation.HttpStatusCode == (int)HttpStatusCode.PreconditionFailed)
				{
					Debug.WriteLine("ETAG did not match. Failed to update. StorageException: " + ex);
				}
				else
				{
					Debug.WriteLine("Failed to update rowEntity. StorageException: " + ex);
				}
				throw;
			}
			catch (Exception ex)
			{
				Debug.WriteLine("Failed to update rowEntity. Exception: " + ex);
				throw;
			}

			if (result.HttpStatusCode != 204)
			{
				Debug.WriteLine("Received unexpected status code when updating row entity: " + result.HttpStatusCode);
				return false;
			}

			return true;
		}

		internal static async Task<bool> DeleteRow(string tableName, string partitionKey, string rowKey)
		{
			// Create the table client.
			CloudTableClient tableClient = _cloudStorageAccount.CreateCloudTableClient();

			// Retrieve a reference to the table.
			CloudTable table = tableClient.GetTableReference(tableName);

			// Create the table if it doesn't exist.
			if (!_createdTables.ContainsKey(tableName))
			{
				_createdTables.TryAdd(tableName, true);
				await table.CreateIfNotExistsAsync();
			}

			// First get it
			TableResult rowEntity = await table.ExecuteAsync(TableOperation.Retrieve(partitionKey, rowKey));

			// Then delete
			TableResult result;
			try
			{
				TableOperation operation = TableOperation.Delete(rowEntity.Result as ITableEntity);
				result = await table.ExecuteAsync(operation);
			}
			catch (StorageException ex)
			{
				if (ex.RequestInformation.HttpStatusCode == (int)HttpStatusCode.PreconditionFailed)
				{
					Debug.WriteLine("ETAG did not match. Failed to delete. StorageException: " + ex);
				}
				else
				{
					Debug.WriteLine("Failed to delete rowEntity. StorageException: " + ex);
				}
				throw;
			}
			catch (Exception ex)
			{
				Debug.WriteLine("Failed to delete rowEntity. Exception: " + ex);
				throw;
			}

			if (result.HttpStatusCode != 204)
			{
				Debug.WriteLine("Received unexpected status code when delete row entity: " + result.HttpStatusCode);
				return false;
			}

			return true;
		}

		public static async Task<List<T>> GetRowsInPartition<T>(string tableName, string partitionId) where T : ITableEntity, new()
		{
			// Create the table client.
			CloudTableClient tableClient = _cloudStorageAccount.CreateCloudTableClient();

			// Retrieve a reference to the table.
			CloudTable table = tableClient.GetTableReference(tableName);

			// Create the table if it doesn't exist.
			if (!_createdTables.ContainsKey(tableName))
			{
				_createdTables.TryAdd(tableName, true);
				await table.CreateIfNotExistsAsync();
			}

			TableQuery<T> query = new TableQuery<T>().Where(TableQuery.GenerateFilterCondition("PartitionKey", QueryComparisons.Equal, partitionId));

			// Execute the query operation.
			IEnumerable<T> result;
			try
			{
				result = await table.ExecuteQuerySegmentedAsync(query, new TableContinuationToken());
			}
			catch (Exception ex)
			{
				Debug.WriteLine("Error while getting element from table partition." + ex.ToString());
				throw;
			}
			return result.ToList();
		}

		public static async Task<List<T>> GetAllRows<T>(string tableName) where T : ITableEntity, new()
		{
			// Create the table client.
			CloudTableClient tableClient = _cloudStorageAccount.CreateCloudTableClient();

			// Retrieve a reference to the table.
			CloudTable table = tableClient.GetTableReference(tableName);

			// Create the table if it doesn't exist.
			if (!_createdTables.ContainsKey(tableName))
			{
				_createdTables.TryAdd(tableName, true);
				await table.CreateIfNotExistsAsync();
			}

			TableQuery<T> query = new TableQuery<T>();

			// Execute the query operation.
			IEnumerable<T> result;
			try
			{
				result = await table.ExecuteQuerySegmentedAsync(query, new TableContinuationToken());
			}
			catch (Exception ex)
			{
				Debug.WriteLine("Error while getting all element from table." + ex.ToString());
				throw;
			}
			return result.ToList();
		}
	}
}