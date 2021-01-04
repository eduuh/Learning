using Microsoft.VisualStudio.TestTools.UnitTesting;
using project;


namespace Mstests
{
    [TestClass]
    public class ReservationTests
    {

        private readonly _math;

        // Setup
        // TearDown > mostly used with intergration tests
        //Used to do clean up for database

        [Setup]
        public void Setup()
        {
            _math = new Math();
        }

        // Arrage // act // assert
        [TestMethod]
        public void CanBeCanCelledBy_userIsAdmin_ReturnTrue()
        {
            var reservation = new Reservation();
            var result = reservation.CanBeCancelledBy(new User { IsAdmin = true });
            Assert.IsTrue(result);
        }

        [TestMethod]
        public void CanBeCancelledBy_userCreated_ReturnTrue()
        {
            var user = new User { };
            var reservation = new Reservation { MadeBy = user };

            var result = reservation.CanBeCancelledBy(user);

            Assert.IsTrue(result);
        }

        [TestMethod]
        public void CanBeCancelledBy_AnyUser_ReturnFalse()
        {
            var reservation = new Reservation { MadeBy = new User { } };

            var result = reservation.CanBeCancelledBy(new User { });

            Assert.IsTrue(result);
        }

    }
}
