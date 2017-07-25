using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace WebApplication2.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult HiHi(int? id)
        {
            ViewBag.Result = id != null ? id.Value : 0;
            return View();
        }

        public ActionResult RWDtest()
        {
            return View();
        }
    }
}
