using System.Web.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using WebApplication2.Controllers;
using WebApplication2;
using WebApplication2.Models;
using System;


namespace UnitTestProject1
{
    [TestClass]
    public class RWDtestControllerTest
    {
        [TestMethod]
        public void GetExample()
        {
            RWDtestController controller = new RWDtestController();

            JsonResult result = controller.GetExample() as JsonResult;

            dynamic data = result.Data;

            Ticket testTicket = new Ticket
            {
                TicketId = 6,
                From = "Paris",
                To = "Copenhagen",
                Departure = Convert.ToDateTime("2017/07/24"),
                Return = Convert.ToDateTime("2017/07/30"),
                Adult = 2,
                Child = 0
            };
            Assert.IsNotNull(result);
            Assert.AreEqual(testTicket.TicketId, data.TicketId);
        }
    }
}
