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
                    CreatedById = 1,
                    CreatedDateTime = DateTime.Now,
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc convallis ipsum id elit placerat, ac malesuada turpis mattis. Curabitur placerat."
                },
                new Order()
                {
                    Id = 2,
                    CreatedById = 1,
                    CreatedDateTime = DateTime.Now,
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet tempus erat. Donec nec egestas justo. Aenean sollicitudin sapien."
                }
            };

            return tempOrders;
        }

        public Order Read(long Id)
        {
            throw new NotImplementedException();
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
