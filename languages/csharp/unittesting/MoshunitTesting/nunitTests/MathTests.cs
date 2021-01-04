using NUnit.Framework;
using project;

namespace nunitTests
{
    [TestFixture]
    public class MathTests
    { 
      private  Math _math;

      [SetUp]
      public void Setup(){
        _math = new Math();
      }
       [Test]
        public void Add_WhenCalled_ReturnTheSumofArguments(){
            var result = _math.Add(1,2);
            Assert.That(result, Is.EqualTo(3));
        }

       /// parameterized tests
      [Test]
      [TestCase(2,1,2)]
      [TestCase(1,2,2)]
      [TestCase(1,1,1)]
      public void Max_WhenCalled_ReturnThefirstArgument(int a, int b, int expectedOutput){
         var result = _math.Max(a,b);
         Assert.That(result, Is.EqualTo(expectedOutput));
      }

      #region SubstitutedByParameterizedObjects
      [Test]
      [Ignore("Because I Wanted To!")]
      public void Max_FirtArgumentIsGreater_ReturnThefirstArgument(){

         var result = _math.Max(2,1);
         Assert.That(result, Is.EqualTo(2));

      }

      [Test]
      public void Max_SecondArgumentIsGreater_ReturnThefirstArgument(){


         var result = _math.Max(1,2);
         Assert.That(result, Is.EqualTo(2));
      }

      [Test]
      public void Max_ArgumentsAreEqual_ReturnTheSameArgument(){

         var result = _math.Max(2,2);
         Assert.That(result, Is.EqualTo(2));
      }

     #endregion
    }
}
