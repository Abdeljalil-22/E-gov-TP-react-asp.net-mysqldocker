﻿
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UserApi.Data;
using UserApi.Models;

namespace UserApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly UserContext _context;

        public UsersController(UserContext context)
        {
            _context = context;

           _context.Database.Migrate();
        }

      
        // GET: api/Users/
        [HttpPost("GetUser")]
        public async Task<ActionResult<User>> GetUser([FromBody] UserLogin data )
        {
            var user = await _context.Users.FirstOrDefaultAsync(i=> i.Name ==data.Name && i.Password == data.Password);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

   
   

        // POST: api/Users
        [HttpPost("PostUser")]
        public async Task<ActionResult<User>> PostUser(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUser", new { id = user.Id }, user);
        }

     
    }
}
