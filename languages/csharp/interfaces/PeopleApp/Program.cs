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
