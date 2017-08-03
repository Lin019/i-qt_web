using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication2.Controllers
{
    public class ChatController : Controller
    {
        //
        // GET: /Chat/
        public ActionResult Index()
        {
            return View();
        }

        public string GetReply(string input)
        {
            return input;
        }
	}
}