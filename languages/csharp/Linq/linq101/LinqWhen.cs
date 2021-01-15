using System.Collections;
using System.Runtime.InteropServices.ComTypes;
using System.Collections.Generic;
using System.Linq;

namespace linq101
{
  public class WhenLinq
  {
   public IEnumerable<int> LWhereLessFiveSqlLike(int[] args){
      var lowNums = from arg in args   
                     where arg < 5
                     select arg;
      return lowNums;
    }

   public IEnumerable<Product> ProductsInStock(IEnumerable<Product> products){
       var productsInStock = from product in products
                              where product.UnitsInStock == 0
                              select product;
      return productsInStock.ToList();
   }

   public IEnumerable<Product> MultiplePropertiesFilterOnproduct(IEnumerable<Product> products){
     var prods = from prod in products
            where prod.UnitsInStock == 0 && prod.UnitPrice > 3
            select prod;
      return prods;
   }
    public IEnumerable<Customer> CustomerFromWashington(IEnumerable<Customer> customers)
        {
            var wacustomer = from cust in customers
                             where cust.Region == "WA"
                             select cust;
            return wacustomer;
        }

    public IEnumerable<string> FilterbyPosition(string[] digits)
    {
        var shortDigits = digits.Where((digits, index) => digits.Length < index);
        return shortDigits;
    }
  }

}
