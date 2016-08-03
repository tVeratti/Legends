using Legends.Data.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using Legends.Models;

namespace Legends.Web.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            var user = new User()
            {
                Id = 1,
                UserName = "Test User",
                CreatedDateTime = new DateTime(1990, 08, 16)
            };

            ViewBag.User = user;

            return View();
        }
    }
}