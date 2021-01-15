using System.Xml.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using linq101.Objects;

namespace linq101
{
    public class Customer
    {
        public string CustomerId { get; set; }
        public string CompanyName { get; set; }
        public string Country { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Region { get; set; }
        public string PostalCode { get; set; }
        public string Phone { get; set; }
        public Order[] Orders { get; set; }

        public override string ToString() => $"{CustomerId},\t{CompanyName}, {Address},\t{City}";

    }

    public class Order
    {
       public int OrderId { get; set; }
       public DateTime OrderDate { get; set; }
       public decimal Total { get; set; }

        public override string ToString() => $"{OrderId}: {OrderDate} for {Total:C2}";

    }

    public class Customers
    {
        public static List<Customer> CustomerList { get; } =
                  (from e in XDocument.Parse(XmlValues.CustomersXml).Root.Elements("customer")
                   select new Customer
                   {
                       CustomerId = (string)e.Element("id"),
                       CompanyName = (string)e.Element("name"),
                       Region = (string)e.Element("region"),
                       City = (string)e.Element("city"),
                       PostalCode = (string)e.Element("postalcode"),
                       Country = (string)e.Element("country"),
                       Phone = (string)e.Element("phone"),
                       Orders = (
                         from o in e.Elements("orders").Elements("order")
                         select new Order
                         {
                             OrderId = (int)o.Element("id"),
                             OrderDate = (DateTime)o.Element("orderdate"),
                             Total = (decimal)o.Element("total")
                         }
                      ).ToArray()
                   }).ToList();
    }
}