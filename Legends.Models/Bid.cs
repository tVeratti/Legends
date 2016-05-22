using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Legends.Models
{
    public class Bid
    {
        // Table Values
        public long Id { get; set; }
        public string Description { get; set; }
        public long CreatedById { get; set; }
        public DateTime CreatedDateTime { get; set; }
    }
}
