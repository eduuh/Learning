using System.Reflection.PortableExecutable;
using System;
using static System.Console;
using System.Diagnostics.CodeAnalysis;

namespace eventsPractice
{
    class Program
    {
        delegate int DMethodIWantTocall(string input);

        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            var p1 = new Person();
            var d = new DMethodIWantTocall(p1.MethodIWantTocall);

            int asw = d("my first string");
            int asw2 = d("my first string");

            var harry = new Person { Name = "Harry" };
            harry.shout += Harry_shout;

            harry.Poke();
            harry.Poke();
            harry.Poke();
            harry.Poke();

            Person[] people = {
            new Person {Name = "Edwin"},
            new Person {Name = "Jenny"},
            new Person {Name = "Adam"},
            new Person {Name = "Richard"},
        };
        WriteLine("Initial list of people");
        foreach(var person in people){
             WriteLine($"{person.Name}");
            }
        
        WriteLine("Use Person's Icomparable sort:");
        Array.Sort(people);
        
        foreach(var person in  people){
             WriteLine($"{person.Name} ");
            }

        WriteLine("Use Person's Icomparer sort:");
        Array.Sort(people);
        
        foreach(var person in  people){
             WriteLine($"{person.Name} ");
            }



        }
        
     private static void Harry_shout(object sender, EventArgs e){
            Person p = (Person)sender;
            WriteLine($"{p.Name}, {p.AngerLevel}");
        }
    }
    
   public class Person : IComparable<Person>{

        public event EventHandler shout;
        public int AngerLevel;

        public void Poke(){
            AngerLevel++;
            if(AngerLevel >=3){
             shout?.Invoke(this, EventArgs.Empty);
            }
        }
        public string Name { get; set; }
        public int MethodIWantTocall(string input)
        {
            return input.Length;
        }

        public int CompareTo(Person other)
        {
            return Name.CompareTo(other.Name);
        }
    }
}
