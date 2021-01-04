using Microsoft.VisualStudio.TestTools.UnitTesting;
using project;


namespace Mstests
{
    [TestClass]
    public class ReservationTests
    {
        [TestMethod]
        // Arrage // act // assert
        public void CanBeCanCelledBy_userIsAdmin_ReturnTrue()
        {
            var reservation = new Reservation();
           var result =reservation.CanBeCancelledBy(new User { IsAdmin = true });
            Assert.isTrue(result);
        }

        [TestMethod]
        public void CanBeCancelledBy_userCreated_ReturnTrue()
        {
            var user = new User { };
            var reservation = new Reservation{ MadeBy = user};

            var result = reservation.CanBeCancelledBy(user);

            Assert.isTrue(result);
        }

        [TestMethod]
        public void CanBeCancelledBy_AnyUser_ReturnFalse()
        {
            var reservation = new Reservation{MadeBy = new User{}};

            var result = reservation.CanBeCancelledBy(new User { });

            Assert.isTrue(result);
        }

    }
}
