using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;
using WebApplication2.Models;

namespace WebApplication2.Controllers
{
    public class RWDtestController : Controller
    {
        private Ticket testTicket = new Ticket
        {
            TicketId = 6,
            From = "Paris",
            To = "Copenhagen",
            Departure = Convert.ToDateTime("2017/07/24"),
            Return = Convert.ToDateTime("2017/07/30"),
            Adult = 2,
            Child = 0
        };
         
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult NewPage()
        {
            Ticket customerTicket = null;

            object obj = null;
            TempData.TryGetValue("Ticket", out obj);

            if (obj != null)
                customerTicket = (Ticket)obj;
            
            object getSend = false;
            TempData.TryGetValue("Send", out getSend);

            getSend = (getSend == null) ? false : true;

            if (customerTicket == null && (bool)getSend)
                return View("Error");
          
            return View(model: customerTicket);
        }

        public ActionResult RedirectToNewPage(Ticket ticket)
        {
            TempData["Ticket"] = ticket;
            TempData["Send"] = true;
            return RedirectToAction("NewPage");
        }

        public JsonResult GetExample()
        {
            return Json(testTicket);
        }
    }
}
