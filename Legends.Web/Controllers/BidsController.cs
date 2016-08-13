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
    public class BidsController : Controller
    {
        private DataContext _context;

        public BidsController(DataContext context) { _context = context; }

        [HttpGet]
        public JsonResult Read(BidFilter filters)
        {
            var results = _context.Bids.Read(filters);
            return Json(results, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Create(Bid Model)
        {
            Model.CreatedById = 1;
            var result = _context.Bids.Create(Model);
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Update(Bid Model)
        {
            var result = _context.Bids.Update(Model, 1);
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Update(IEnumerable<Bid> Model)
        {
            var result = _context.Bids.Update(Model, 1);
            return Json(result, JsonRequestBehavior.AllowGet);
        }
    }
}