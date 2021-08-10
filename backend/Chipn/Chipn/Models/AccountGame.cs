using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Chipn.Models
{
    public class AccountGame
    {
        public int Id { get; set; }
        public int AccountId { get; set; }
        public virtual Account Account { get; set; }
        public int GameId { get; set; }
        public virtual Game Game { get; set; }
        public int Wagers { get; set; }
        public int Payouts { get; set; }
    }
}
