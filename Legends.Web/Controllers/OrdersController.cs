using Legends.Data.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Legends.Web.Controllers
{
    public class OrdersController : Controller
    {
        private OrderService _orders;
        public OrdersController() { _orders = new OrderService(); }

        [HttpGet]
        public JsonResult Get()
        {
            var results = _orders.Read();
            return Json(results, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult Find(long Id)
        {
            var result = _orders.Read(Id);
            return Json(result, JsonRequestBehavior.AllowGet);
        }
    }
}