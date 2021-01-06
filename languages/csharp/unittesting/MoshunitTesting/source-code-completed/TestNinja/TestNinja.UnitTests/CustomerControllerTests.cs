using TestNinja.Fundamentals;

namespace TestNinja.UnitTests
{ 
    [TestFixture]
    public class CustomerControrllerTests {
        [Test]
        public void GetCustomer_IdIsZero_ReturnNotFound(){
            var controller = new CustomerController();

            var result = controller.GetCustomer(0);

            Assert.That();

        }

        [Test]
        public void GetCustomer_IdisNotZero_ReturnOk(){

        }
    }
}
