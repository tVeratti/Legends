using Legends.Data;
using Legends.Models;
using Legends.Models.Filters;
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
        public JsonResult Read()
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

        [HttpGet, OutputCache(Duration = 60 * 60)]
        public JsonResult Contract(long Id)
        {
            var result = _context.Contracts.Read(Id);
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Create(Work Model, IEnumerable<Contract> Contracts)
        {
            Model.CreatedById = 1;
            Model.Contracts = Contracts;
            var result = _context.Work.Create(Model);

            return Json(result, JsonRequestBehavior.AllowGet);
        }
    }
}