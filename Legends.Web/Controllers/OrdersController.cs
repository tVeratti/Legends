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
            // Get Id Enums as Dictionary<string, string> models.
            var enums = new
            {
                Categories =    getEnumDictionary(typeof(CategoryIds)),
                Skills =        getEnumDictionary(typeof(SkillIds)),
                Tiers =         getEnumDictionary(typeof(TierIds))
            };

            return Json(enums, JsonRequestBehavior.AllowGet);
        }
        
        /// <summary>
        /// Get a Dictionary of values from an enum type. This is useful for passing the values
        /// to JavaScript as an associative array used for mapping model Ids.
        /// </summary>
        /// <param name="enumType">Class Type of the enum.</param>
        /// <returns>Dictionary (string, string) that represent the enum.</returns>
        private Dictionary<string, string> getEnumDictionary(Type enumType)
        {
            var enumDictionary = new Dictionary<string, string>();

            var values = Enum.GetValues(enumType);
            foreach (var key in values)
            {
                // Get the int Id and the string value that matches.
                var id = ((int)key).ToString();
                var name = key.ToString();

                // Add the KVP to the Dictionary.
                enumDictionary.Add(id, name);
            }

            return enumDictionary;
        }
    }
}