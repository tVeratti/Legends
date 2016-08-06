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
        public long ContractId { get; set; }
        public long TierId { get; set; }
        public long OfferId { get; set; }
        public long Quantity { get; set; }
        public string Description { get; set; }
        public long CreatedById { get; set; }
        public DateTime CreatedDateTime { get; set; }
        public int StatusId { get; set; }

        // Joined Values
        public string Tier { get; set; }
        public int TierOrder { get; set; }
        public string Offer { get; set; }
        public string Status { get; set; }
        public string Bidder { get; set; }
    }
}
