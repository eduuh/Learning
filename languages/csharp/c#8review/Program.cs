using System;
using static System.Console;
using System.Linq;
using System.Reflection;

namespace c_8review
{
  class Program
  {
    static void Main(string[] args)
    {
      //comments // single line /*multiline*/
      //statements ends with semicolon
      // examples are 👇
      var subtotal = 20;
      var salesTax = 20;
      var totalprice = subtotal + salesTax;
      WriteLine(totalprice);
      string s = null;
      // C# vocabulary is made uf of keywords, symbols, characters, types
      // predefined: -> using, namespace, class, static, int string,double, bool
      //if , switch, break, while, do , for and foreach
      // Programmers must learn english. Most Programing languages are written in english.

      s ??= "hello world";
      WriteLine(s);
      WriteLine();
      WriteLine("My name is edwin");


      // verbs are methods.
      // Verbs are doing or action words, like run and jump.
      // C# doing or action words are called **methods**
      // C#, methods change how they are called or executed based on the specifics of the action.
      // This is called overloading.
      // Some words are spelled the same , but have different meaning depending on the context.
      WriteLine("Hellow Edwin!");
      WriteLine("Temperature on {0:D} is {1}C", DateTime.Today, 23.4);

      // Nouns are types, fields and variables.
      // Noun are names that refer to things. Fido is the name of a dog.
      // In C#, their equivalent are types, fields and variables.
      // It's worth taking note that the type is often confused with class.
      // types are often confused with class.
      // type can be categorized as a **class, struct, enum, interface, or delegate**
      // examples
      //   The C# keywords string is a class, but int is a struct . 
      // Nouns are types, fields, and variables.
      // The term type is often confused with class.
      // parlor game : Twenty questions.
      //
      char letter = 'A';
      char digit = '2';
      char symbol = '$';
      char userChoice = GetKeystroke();

      string firstName = "Bob";
      string lastName = "Smith";
      string phoneNumber = "(215) 3838 8383";

      string address = GetAddressFromDatabase(id: 53);

      // Undestandig vertim strings
      string fullNamewithTabseparator = "Bob\tSmith";
      string filepath = @"C:\televisions\sony\bravia.txt";
      string filepath2 = @"C:\televison\sony\bravia.txt"

    // Literal String: characters enclosed in double-quote characters. They can use escape characters like \t fo tab.
    // Verbatim string: A literal string prefixed with @ to disable escape charcters so that a backslass is backs.
    // interpolated string: A literal string prefixed with $ to enable embedded formatted variables. You will learn about this later.

      // Storing dynamic types. 
      // There is another special type nameb dyanmic that can also store any type of data but even more that object , its flexibility comes at the cost of performance.

      dynamic anotherName = "Ahmed";
      int length = anotherName.Length;
      string[] names = new string[4];
      // Exceptions are a way to indicate that something has gone wrong.
      for (int i = 0; i < names.Length; i++)
      {
        WriteLine(names[i]);
      }

      double a = 0.1;
      double b = 0.3;

      if(a +b == 0.4) {
        Console.WriteLine($"{a} + {b} equals 0.3");
      } else{
        Console.WriteLine($"{ a } + { b }  does Not equal 0.4");
      }
    }
  }
}
