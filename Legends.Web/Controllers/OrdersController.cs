using Legends.Data.Services;
using Legends.Models;
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

        [HttpGet]
        public JsonResult GetEnums()
        {
            var model = new
            {
                Categories = this.getCategories(),
                Skills = this.getSkills(),
                Tiers = this.getTiers()
            };

            return Json(model, JsonRequestBehavior.AllowGet);
        }
        
        private Dictionary<string, string> getCategories()
        {
            var values = Enum.GetValues(typeof(CategoryIds));
            return this.enumDictionary(values);
        }

        private Dictionary<string, string> getSkills()
        {
            var values = Enum.GetValues(typeof(SkillIds));
            return this.enumDictionary(values);
        }

        private Dictionary<string, string> getTiers()
        {
            var values = Enum.GetValues(typeof(TierIds));
            return this.enumDictionary(values);
        }

        private Dictionary<string, string> enumDictionary(Array values)
        {
            Dictionary<string, string> enumDictionary = new Dictionary<string, string>();
            foreach (var key in values)
            {
                var id = ((int)key).ToString();
                var name = key.ToString();

                enumDictionary.Add(id, name);
            }
            return enumDictionary;
        }
    }
}