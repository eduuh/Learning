using NUnit.Framework;
using project;

namespace nunitTests
{ 
   [TestFixture]
   public class fizzbuzzTests
   {
      [Test]
      public void GetOutPut_Divisibleby3andFive_ReturnFizzBuzz(){
        var result = FizzBuzz.GetOutput(15);
        Assert.That(result, Is.EqualTo("FizzBuzz"));
      }

      [Test]
      public void GetOutPut_DivisiblebyThree_ReturnFizz(){
        var result = FizzBuzz.GetOutput(3);
        Assert.That(result, Is.EqualTo("Fizz"));
      }

      [Test]
      public void GetOutPut_DivisiblebyFive_ReturnBuzz(){
        var result = FizzBuzz.GetOutput(5);
        Assert.That(result, Is.EqualTo("Buzz"));
      }
      [Test]
      public void GetOutPut_NotDivisibleByThreeorFive_ReturnBuzz(){
        var result = FizzBuzz.GetOutput(2);
        Assert.That(result, Is.EqualTo("2"));
      }

   }
}
