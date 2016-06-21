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
        public int CategoryId { get; set; }
        public int SkillId { get; set; }
        public int TierId { get; set; }
        public long CreatedById { get; set; }
        public DateTime CreatedDateTime { get; set; }
        public long Duration { get; set; }

        // Joined Values
        public IEnumerable<Bid> Bids { get; set; }
    }

    public enum CategoryIds
    {
        Combat = 1,
        Survival = 2,
        Gathering = 3,
        Deviant = 4,
        Crafting = 5,
        Bardic = 6
    }

    public enum SkillIds
    {
        Striking = 1,
        Grappling = 2,
        Axes = 3,
        Swords = 4,
        Rapiers = 5,
        Maces = 6,
        Daggers = 7,
        Navigation = 8,
        Blacksmithing = 9,
        Leatherworking = 10
    }

    public enum TierIds
    {
        Novice = 1,
        Apprentice = 2,
        Journeyman = 3,
        Expert = 4,
        Artisan = 5,
        Renowned = 6,
        Master = 7,
        Grandmaster = 8,
        Legendary = 9
    }
}
