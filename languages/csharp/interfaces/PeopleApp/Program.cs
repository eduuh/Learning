using System;
using static System.Console;
using  Packt.shared;
using PacktLibrary;

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

        try
        {
            var datetime = DateTime.Now.Millisecond;
            WriteLine($"8! is {Person.Factorial(8)}");
            var datetime2 = DateTime.Now.Millisecond;
            WriteLine(datetime2 - datetime);
        }
        catch (System.Exception)
        {
            
            WriteLine("There is not factorial for negative numbers");
        }

            harry.shout += Harry_shout;
            harry.Poke();
            harry.Poke();
            harry.Poke();
        Person[] people = {
            new Person {Name = "simon"},
            new Person {Name = "Jenny"},
            new Person {Name = "Adam"},
            new Person {Name = "Richard"}
        };

            WriteLine("Initial list of people:");
            foreach(var person in people) {
                WriteLine($"{person.Name}");
            }

            WriteLine("Use Persons Icomparable implementation to sort");
            Array.Sort(people);

            foreach(var person in people){
                WriteLine($"{person.Name}");
            }

            WriteLine("Use Personcomaparer's Icomparer implementation to sort");
            Array.Sort(people, new PersonComparer());
            foreach(var person in people){
                WriteLine($"{person.Name}");
            }

            var t1 = new Thing();
            t1.Data = 43;
            WriteLine($"Thing with an interger {t1.Process(43)}");


            var t2 = new Thing();
            t2.Data = "apple";
            WriteLine($"Thing with an string {t2.Process("apple")}");

            var gt1 = new GenericThing<int>();
            gt1.Data = 42;
            WriteLine($"Thing with an int {t2.Process(42)}");


            var gt2 = new GenericThing<string>();
            gt2.Data = "apple";
            WriteLine($"Thing with an string {t2.Process("apple")}");

            string number = "4";
            WriteLine("{0} squared is {1}", arg0: number, arg1: Squarer.Square<string>(number));

            byte number2 = 3;
            WriteLine("{0} squared is {1}", arg0: number2, arg1: Squarer.Square(number2));

        }

        public static void Harry_shout(object sender, EventArgs e)
        {
            Person p = (Person)sender;
            WriteLine($"{p.Name} is the angry: ");
        }
    public static int Factorial(int number) {
        if(number < 1) throw new Exception("Number cannot be negative");
            return localfuction(number);

            int localfuction(int localnumber) {
                if(localnumber < 1) return 1;
                return localnumber * localfuction(number - 1);
            }
    }

    }

}
