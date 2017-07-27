using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using WebApplication2.Controllers;
using System.Web.Mvc;
using WebApplication2.Models;

namespace UnitTestProject1
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestMethod1()
        {
        }

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
