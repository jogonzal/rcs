using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using RcsServer.Storage;

namespace RcsServer.Controllers
{
	[Route("api/[controller]")]
	public class GamesController : Controller
	{
		private string TableName = "RCSGAMES";

		[HttpGet("")]
		public async Task<IList<GameStorageEntity>> GetGamesForSeason(string season, string teamName)
		{
			return await TableStorage.GetRowsInPartition<GameStorageEntity>(TableName, this.GetPartitionName(season, teamName));
		}

		[HttpPost("")]
		public async Task<IActionResult> AddGameToSeason(string season, string teamName, string rec)
		{
			if (rec != "jorge")
			{
				return Unauthorized();
			}

			string bodyAsText;
			using (var bodyReader = new StreamReader(Request.Body))
			{
				bodyAsText = bodyReader.ReadToEnd();
			}

			var input = JsonConvert.DeserializeObject<GameStorageEntity>(bodyAsText);
			//input.Date = DateTime.Now; // Always this date
			await TableStorage.InsertIntoTable(TableName, this.GetPartitionName(season, teamName), Guid.NewGuid().ToString(), input);
			return Ok();
		}

		private string GetPartitionName(string season, string teamName)
		{
			return $"{teamName}-{season}";
		}

		[HttpDelete("")]
		public async Task<IActionResult> DeleteGameFromSeason(string season, string teamName, string rec, string gameId)
		{
			if (rec != "jorge")
			{
				return Unauthorized();
			}

			await TableStorage.DeleteRow(TableName, this.GetPartitionName(season, teamName), gameId);
			return Ok();
		}
	}
}
