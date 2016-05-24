using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Legends.Models
{
    public class Order
    {
        // Table Values
        public long Id { get; set; }
        public string Description { get; set; }
        public long CreatedById { get; set; }
        public DateTime CreatedDateTime { get; set; }
        public long Duration { get; set; }

        // Joined Values
        public IEnumerable<Bid> Bids { get; set; }
    }
}
