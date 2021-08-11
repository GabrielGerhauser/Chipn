using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Chipn;
using Chipn.Models;

namespace Chipn.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountGameController : ControllerBase
    {
        private readonly ChipnDBContext _context;

        public AccountGameController(ChipnDBContext context)
        {
            _context = context;
        }

        // GET: api/AccountGames
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AccountGame>>> GetAccountGame()
        {
            return await _context.AccountGames.ToListAsync();
        }

        // GET: api/AccountGames/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AccountGame>> GetAccountGame(int id)
        {
            var accountGame = await _context.AccountGames.FindAsync(id);

            if (accountGame == null)
            {
                return NotFound();
            }

            return accountGame;
        }

        // PUT: api/AccountGames/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAccountGame(int id, [FromBody]AccountGame accountGame)
        {
            if (id != accountGame.Id)
            {
                return BadRequest();
            }

            _context.Entry(accountGame).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AccountGameExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/AccountGames
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<AccountGame>> PostAccountGame([FromBody]AccountGame accountGame)
        {
            _context.AccountGames.Add(accountGame);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAccountGame", new { id = accountGame.Id }, accountGame);
        }

        // DELETE: api/AccountGames/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAccountGame(int id)
        {
            var accountGame = await _context.AccountGames.FindAsync(id);
            if (accountGame == null)
            {
                return NotFound();
            }

            _context.AccountGames.Remove(accountGame);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AccountGameExists(int id)
        {
            return _context.AccountGames.Any(e => e.Id == id);
        }
    }
}
