using System.Runtime.CompilerServices;
using System.Reflection;
using NUnit.Framework;
using project;

namespace nunitTests
{
   [TestFixture]
    public class ReservationnTests
    {
        [Test]
        public void CanBeCanCelledBy_userIsAdmin_ReturnTrue()
        {
            var reservation = new Reservation();
           var result =reservation.CanBeCancelledBy(new User { IsAdmin = true });
            Assert.That(result, Is.True);
        }

        [Test]
        public void CanBeCancelledBy_userCreated_ReturnTrue()
        {
            var user = new User { };
            var reservation = new Reservation{ MadeBy = user};

            var result = reservation.CanBeCancelledBy(user);
            Assert.That(result, Is.True);
        }

        [Test]
        public void CanBeCancelledBy_AnyUser_ReturnFalse()
        {
            var reservation = new Reservation{MadeBy = new User{}};
            var result = reservation.CanBeCancelledBy(new User());

            Assert.IsFalse(result);

        }
    }
}