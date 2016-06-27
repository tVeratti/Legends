using Legends.Data;
using Legends.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Legends.Web.Controllers
{
    public class WorkController : Controller
    {
        private DataContext _context;

        public WorkController(DataContext context) { _context = context; }

        [HttpGet]
        public JsonResult Get()
        {
            var results = _context.Work.Read();
            return Json(results, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult Find(long Id)
        {
            var result = _context.Work.Read(Id);
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult Lookup_Skills()
        {
            var result = _context.Lookups.Skills();
            return Json(result, JsonRequestBehavior.AllowGet);
        }
    }
}