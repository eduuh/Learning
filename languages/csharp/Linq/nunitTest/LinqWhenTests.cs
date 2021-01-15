using System.Collections.Generic;
using linq101;
using NUnit.Framework;

namespace nunitTest
{
    [TestFixture]
  public class LinqWhenTests
  {
    private WhenLinq _linqwhen;
    private IEnumerable<Product> _products;
    [SetUp]
    public void Setup(){
       _linqwhen = new WhenLinq();
       _products = Products.ProductList;
    }
    [Test]
    public void LinqWhenLessFiveSqlLike_whenCalled_ReturnsValuesLesssThatFive(){
      //arrangesntn
      int[] numbers = {34,4,34,2,1,1,23,5};

      var result = _linqwhen.LWhereLessFiveSqlLike(numbers);
      int[] expected = {4,2,1,1};

      Assert.That(result, Is.EqualTo(expected));
    }
     [Test]
    public void ProductsInStock_LinqfilterElementsOnaProperty_ReturnsProductsInStock(){

      var result = _linqwhen.ProductsInStock(_products);
      Assert.That(result, Is.Not.Empty);
    }

     [Test]
     public void _MultiplePropertiesFilter_Filtering_ReturnsOutofStockprodWithUnitPriceGreaterThan1001_(){
            var result = _linqwhen.MultiplePropertiesFilterOnproduct(_products);
            Assert.That(result, Is.Not.Empty);
        }
  }
}
