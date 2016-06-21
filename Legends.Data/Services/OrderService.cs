using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Legends.Models;

namespace Legends.Data.Services
{
    public class OrderService : IService<Order>
    {
        private IService<Order> _orderService;

        public OrderService()
        {
            //_orderService = new Service<Order>("ConnectionString");
        }

        public Order Create(Order Model)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Order> Read()
        {
            var tempOrders = new List<Order>()
            {
                new Order()
                {
                    Id = 1,
                    SkillId = (int)SkillIds.Blacksmithing,
                    TierId = (int)TierIds.Expert,
                    CreatedById = 1,
                    CreatedDateTime = DateTime.Now.AddDays(-1),
                    Duration = 72,
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc convallis ipsum id elit placerat, ac malesuada turpis mattis. Curabitur placerat."
                },
                new Order()
                {
                    Id = 2,
                    SkillId = (int)SkillIds.Navigation,
                    TierId = (int)TierIds.Master,
                    CreatedById = 1,
                    CreatedDateTime = DateTime.Today,
                    Duration = 100,
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet tempus erat. Donec nec egestas justo. Aenean sollicitudin sapien."
                },
                new Order()
                {
                    Id = 3,
                    CategoryId = (int)CategoryIds.Combat,
                    TierId = (int)TierIds.Legendary,
                    CreatedById = 1,
                    CreatedDateTime = DateTime.Now.AddHours(-4),
                    Duration = 24,
                    Description = "Vestibulum sit amet tempus erat. Donec nec egestas justo. Aenean sollicitudin sapien."
                }
            };

            return tempOrders;
        }

        public Order Read(long Id)
        {
            return new Order()
            {
                Id = 1,
                CreatedById = 1,
                CreatedDateTime = DateTime.Now,
                Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc convallis ipsum id elit placerat, ac malesuada turpis mattis. Curabitur placerat."
            };
        }

        public Order Update(Order Model)
        {
            throw new NotImplementedException();
        }

        public void Delete(long Id)
        {
            throw new NotImplementedException();
        }
    }
}
