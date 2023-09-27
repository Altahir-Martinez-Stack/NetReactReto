using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectNetjs.Models;

namespace ProjectNetjs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReceiptController : ControllerBase
    {
        private readonly DbprojectNetjsContext _dbcontext;

        public ReceiptController(DbprojectNetjsContext context)
        {
            _dbcontext = context;
        }

        [HttpGet]
        [Route("List")]
        public async Task<IActionResult> List()
        {
            // query getAll table Receipts
            List<Receipt> receipt = await _dbcontext.Receipts.Where(t => true).ToListAsync();
            return StatusCode(StatusCodes.Status200OK, receipt);
        }

        [HttpPost]
        [Route("Save")]
        public async Task<IActionResult> Save([FromBody] Receipt request)
        {
            await _dbcontext.Receipts.AddAsync(request);
            await _dbcontext.SaveChangesAsync();
            return StatusCode(StatusCodes.Status200OK, "Ok");
        }


        [HttpPut]
        [Route("Update")]
        public async Task<IActionResult> Update([FromBody] Receipt request)
        {
            _dbcontext.Receipts.Update(request);
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
