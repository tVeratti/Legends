using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Legends.Models;

namespace Legends.Data.Services
{
    public class OrderService
    {
        private IService<Order> _orderService;

        public OrderService()
        {
            _orderService = new Service<Order>("ConnectionString");
        }
    }
}
