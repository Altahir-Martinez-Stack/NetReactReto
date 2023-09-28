using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectNetjs.Models;
using System.ComponentModel.DataAnnotations;

namespace ProjectNetjs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoinsController : ControllerBase
    {
        private readonly DbprojectNetjsContext _dbcontext;

        public CoinsController(DbprojectNetjsContext context)
        {
            _dbcontext = context;
        }

        [HttpGet]
        [Route("List")]
        public async Task<IActionResult> List()
        {
            List<Coin> coin = await _dbcontext.Coins.Where(t => true).ToListAsync();
            return StatusCode(StatusCodes.Status200OK, coin);
        }

        [HttpGet]
        [Route("ListById/{id:int}")]
        public async Task<IActionResult> ListById(int id)
        {
            var coin = await _dbcontext.Coins.Where(t => t.Id == id).SingleOrDefaultAsync();
            return StatusCode(StatusCodes.Status200OK, coin);
        }

        [HttpPost]
        [Route("Save")]
        public async Task<IActionResult> Save([FromBody] Coin request)
        {
            await _dbcontext.Coins.AddAsync(request);
            await _dbcontext.SaveChangesAsync();
            return StatusCode(StatusCodes.Status200OK, "Ok");
        }


        [HttpPut]
        [Route("Update")]
        public async Task<IActionResult> Update([FromBody] Coin request)
        {
            _dbcontext.Coins.Update(request);
            await _dbcontext.SaveChangesAsync();
            return StatusCode(StatusCodes.Status200OK, "Ok");
        }

        [HttpDelete]
        [Route("Delete/{id:int}")]
        public async Task<IActionResult> Delete(int? id)
        {
            // query Delete by id table Receipts
            Receipt receipt = _dbcontext.Receipts.Find(id);
            _dbcontext.Receipts.Remove(receipt);
            await _dbcontext.SaveChangesAsync();
            return StatusCode(StatusCodes.Status200OK, "Ok");
        }
    }
}
