using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Legends.Models
{
    public class Table_Contract
    {
        // Table Values
        public long Id { get; set; }
        public long WorkId { get; set; }
        public int TierId { get; set; }
        public int CategoryId { get; set; }
        public int SkillId { get; set; }
        public int DurationId { get; set; }
        public string Description { get; set; }
        public long CreatedById { get; set; }
        public DateTime CreatedDateTime { get; set; }
    }

    public class Contract : Table_Contract
    {
        // Joined Values
        public string Category { get; set; }
        public string Skill { get; set; }
        public string Tier { get; set; }
        public int Duration { get; set; }
        public IEnumerable<Bid> Bids { get; set; }
    }
}
