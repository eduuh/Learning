using NUnit.Framework;
using project;

namespace nunitTests
{
  [TestFixture]
  public class HtmlFormatterTests {
    [Test]
    public void FormatAsBold_whenCalled_ShouldEncloseTheStringStrongElements(){
       var formatter = new HtmlFormatter();

       var result = formatter.FormatAsBold("abc");
       // specific
       Assert.That(result,Is.EqualTo("<strong>abc</strong>"));

       // More general
       Assert.That(result, Does.StartWith("<strong>").IgnoreCase);
       Assert.That(result, Does.EndWith("</strong>"));
       //Assert.That(result, Does.Contain("abs"));
    }
  }
}
