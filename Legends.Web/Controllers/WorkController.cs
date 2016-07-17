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

        [HttpGet]
        public JsonResult FindContract(long Id)
        {
            var result = _context.Contracts.Read(Id);
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Create(Work Model, IEnumerable<Contract> Contracts)
        {
            Model.Contracts = Contracts;
            var result = _context.Work.Create(Model);

            return Json(result, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult CreateBid(long ContractId)
        {
            var result = _context.Contracts.CreateBid(ContractId);
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        [OutputCache(Duration = 60 * 60 * 24)]
        public JsonResult Lookup_Skills()
        {
            var result = _context.Lookups.Skills();
            return Json(result, JsonRequestBehavior.AllowGet);
        }
    }
}