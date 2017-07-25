using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApplication2.Models
{
    public class Ticket
    {
        public int TicketId { get; set; }
        public string From { get; set; }
        public string To { get; set; }
        public DateTime Departure { get; set; }
        public DateTime Return { get; set; }
        public string strDeparture
        {
            get
            {
                return this.Departure.ToString("d");
            }
        }
        public string strReturn
        {
            get
            {
                return this.Return.ToString("d");
            }
        }
        public int Adult { get; set; }
        public int Child { get; set; }
        public int Infant { get; set; }
    }
}