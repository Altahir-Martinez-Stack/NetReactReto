using Azure.Core;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectNetjs.Models;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace ProjectNetjs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly DbprojectNetjsContext _dbcontext;
        public UsersController(DbprojectNetjsContext context)
        {
            _dbcontext = context;
        }

        [HttpGet]
        [Route("List")]
        public async Task<IActionResult> List()
        {
            List<User> users = await _dbcontext.Users.Where(t => true).ToListAsync();
            return StatusCode(StatusCodes.Status200OK, users);
        }

        [HttpPost]
        [Route("Save")]
        public async Task<IActionResult> Save([FromBody] User request)
        {
            await _dbcontext.Users.AddAsync(request);
            await _dbcontext.SaveChangesAsync();
            return StatusCode(StatusCodes.Status200OK, "Ok");
        }


        [HttpPut]
        [Route("Update")]
        public async Task<IActionResult> Update([FromBody] User request)
        {
            _dbcontext.Users.Update(request);
            await _dbcontext.SaveChangesAsync();
            return StatusCode(StatusCodes.Status200OK, "Ok");
        }

        [HttpDelete]
        [Route("Delete/{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            User user = _dbcontext.Users.Find(id);
            _dbcontext.Users.Remove(user);
            await _dbcontext.SaveChangesAsync();
            return StatusCode(StatusCodes.Status200OK, "Ok");
        }
    }
}
