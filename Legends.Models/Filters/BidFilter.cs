using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Legends.Models.Filters
{
    public class BidFilter
    {
        public long ContractId { get; set; }
        public string Filter { get; set; }
        public int MinimumTier { get; set; }
        public int MaximumTier { get; set; }
        public IEnumerable<int> Statuses { get; set; }
        public string SortBy { get; set; }
        public int SortOrder { get; set; }
    }
}
