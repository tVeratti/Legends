using Legends.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Legends.Web.Controllers
{
    public class LookupsController : Controller
    {
        private DataContext _context;

        public LookupsController(DataContext context) { _context = context; }

        [HttpGet]
        [OutputCache(Duration = 60 * 60 * 24)]
        public JsonResult Read()
        {
            var result = _context.Lookups.Read();
            return Json(result, JsonRequestBehavior.AllowGet);
        }
    }
}