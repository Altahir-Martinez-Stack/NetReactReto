using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectNetjs.Models;

namespace ProjectNetjs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DocumentTypeController : ControllerBase
    {
        private readonly DbprojectNetjsContext _dbcontext;

        public DocumentTypeController(DbprojectNetjsContext context)
        {
            _dbcontext = context;
        }

        [HttpGet]
        [Route("List")]
        public async Task<IActionResult> List()
        {
            List<DocumentType> documentType = await _dbcontext.DocumentTypes.Where(t => true).ToListAsync();
            return StatusCode(StatusCodes.Status200OK, documentType);
        }
        [HttpGet]
        [Route("ListById/{id:int}")]
        public async Task<IActionResult> ListById(int id)
        {
            var documentType = await _dbcontext.DocumentTypes.Where(t => t.Id == id).SingleOrDefaultAsync();
            return StatusCode(StatusCodes.Status200OK, documentType);
        }
    }
}
