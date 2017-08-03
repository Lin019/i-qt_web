using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication2.Models
{
    public class Flight
    {
        public string flightNo { get; set; }
        public string departureAirport { get; set; }
        public string arrivalAirport { get; set; }
        public DateTime departureDateTime { get; set; }
        public DateTime arrivalDateTime { get; set; }
        public string flightStats { get; set; }
        public string seat { get; set; }
        public int price { get; set; }
    }
}