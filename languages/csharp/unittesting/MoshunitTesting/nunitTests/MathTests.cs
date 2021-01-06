using NUnit.Framework;
using project;

namespace nunitTests
{
    [TestFixture]
    public class MathTests
    {
        private Math _math;

        [SetUp]
        public void Setup()
        {
            _math = new Math();
        }
        [Test]
        public void Add_WhenCalled_ReturnTheSumofArguments()
        {
            var result = _math.Add(1, 2);
            Assert.That(result, Is.EqualTo(3));
        }

        [Test]
        public void GetOddNumbers_LimitIsGreaterThanZero_ReturnOddNumbersUpToLimit()
        {
            var result = _math.GetOddNumbers(5);

           // Assert.That(result.Count(), Is.EqualTo(3));
            //Assert.That(result, Does.Contain(1));
            //Assert.That(result, Does.Contain(3));
            //Assert.That(result, Does.Contain(5));
            Assert.That(result, Is.EquivalentTo(new []{1,3,5}));

        }


        /// parameterized tests
        [Test]
        [TestCase(2, 1, 2)]
        [TestCase(1, 2, 2)]
        [TestCase(1, 1, 1)]
        public void Max_WhenCalled_ReturnThefirstArgument(int a, int b, int expectedOutput)
        {
            var result = _math.Max(a, b);
            Assert.That(result, Is.EqualTo(expectedOutput));
        }

        #region SubstitutedByParameterizedObjects
        [Test]
        [Ignore("Because I Wanted To!")]
        public void Max_FirtArgumentIsGreater_ReturnThefirstArgument()
        {

            var result = _math.Max(2, 1);
            Assert.That(result, Is.EqualTo(2));

        }

        [Test]
        public void Max_SecondArgumentIsGreater_ReturnThefirstArgument()
        {


            var result = _math.Max(1, 2);
            Assert.That(result, Is.EqualTo(2));
        }

        [Test]
        public void Max_ArgumentsAreEqual_ReturnTheSameArgument()
        {

            var result = _math.Max(2, 2);
            Assert.That(result, Is.EqualTo(2));
        }

        #endregion
    }
}
