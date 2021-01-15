using System.Runtime.InteropServices;
using static System.Console;

namespace linq101
{
    class Program
    {
        static void Main(string[] args)
        {
            var linqwhen = new WhenLinq();
            var products = Products.ProductList;
            var custmerList = Customers.CustomerList;
            string[] digits = { "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" };




            var prods = linqwhen.MultiplePropertiesFilterOnproduct(products);
            WriteLine("filters Elements on Multiple values");
            foreach (var product in prods)
            {
                WriteLine(product);
            }

            // Filtering cutomers from from Wachinton
            var wachintoncust = linqwhen.CustomerFromWashington(custmerList);
            WriteLine("checkeng if pasing works");
            foreach (var customer in wachintoncust)
            {
                WriteLine(customer);
                foreach (var order in customer.Orders)
                {
                    WriteLine($"Order {order.OrderId}, {order.OrderDate}");
                }
            }

            var shortdigit = linqwhen.FilterbyPosition(digits);
            foreach (var d in shortdigit)
            {
                WriteLine($"The word {d} is shorter that its index");
            }



        }
    }
}
