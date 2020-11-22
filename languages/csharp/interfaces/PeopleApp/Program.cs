using System;
using static System.Console;
using  Packt.shared;


namespace PeopleApp
{
    class Program
    {
        static void Main(string[] args)
        {

            var harry = new Person {Name = "Harry"} ;
            var mary = new Person {Name = "mary"} ;
            var jill = new Person {Name = "jill"} ;

            // Call instance method

            var baby1 = mary.ProcreateWtih(harry);

            // call static method
            var baby2 = Person.Procreate(harry, jill);
            //using operator method
            var baby = harry * jill;
            WriteLine($"{harry.Name} has {harry.children.Count} children");
            WriteLine($"{mary.Name} has {mary.children.Count} children");
            WriteLine($"{jill.Name} has {jill.children.Count} children");

           WriteLine();
            Console.WriteLine("Procreate with * operator");

            WriteLine(baby);

            
        }
    }
}
