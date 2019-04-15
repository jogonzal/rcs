using Microsoft.WindowsAzure.Storage.Table;
using System;

namespace RcsServer.Storage
{
	public class IPlayerStats
	{
		public int Goals { get; set; }
		public int Assists { get; set; }
		public int Pitchers { get; set; }
		public int BlueCards { get; set; }
		public int CleanSheets { get; set; }
		public string Comment { get; set; }
	}

	public class RootObject
	{
		public string Opponent { get; set; }
		public DateTime Date { get; set; }
		public int GoalsInFavor { get; set; }
		public int GoalsAgainst { get; set; }
		public string Notes { get; set; }
		public string SerializedPlayerStats { get; set; }
	}

	public class GameStorageEntity : TableEntity
	{
		public GameStorageEntity()
		{

		}

		public GameStorageEntity(string partitionKey, string rowKey) : base(partitionKey, rowKey)
		{
		}

		public string Opponent { get; set; }
		public DateTime Date { get; set; }
		public int GoalsInFavor { get; set; }
		public int GoalsAgainst { get; set; }
		public string Notes { get; set; }
		public string SerializedPlayerStats { get; set; }
	}
}