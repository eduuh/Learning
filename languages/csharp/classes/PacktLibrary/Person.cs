using System;
using System.Collections.Generic;
using static System.Console;

namespace Packt.shared
{
    public class Person: IComparable<Person>
    {
        // event delegate field
        public event EventHandler shout;
        // data field
        public int AngerLevel;

        // method
        public void Poke()
        {
            AngerLevel++;
            if (AngerLevel >= 3) {
                if(shout != null) {
                    shout(this, EventArgs.Empty);
                }
            }
    }

        // fields
        public string Name;
        public DateTime DateOfBirth;
        public List<Person> children = new List<Person>();

        // method
        public void WriteToConsole() {
            WriteLine($"{Name} was born on a {DateOfBirth:dddd}.");
        }
        // static method
        public static Person Procreate(Person p1, Person p2) {

            var baby = new Person {
                Name = $"Baby of {p1.Name} and {p2.Name}"
            };
            p1.children.Add(baby);
            p2.children.Add(baby);
            return baby;
        }

        public static Person operator *(Person p1, Person p2){
            return Person.Procreate(p1,p2);
        }

        // Instance Method to "multiply"
        public Person ProcreateWtih(Person partner) {
            return Procreate(this, partner);
        }

        public static int Factorial(int number) {
            if(number < 0) {
                throw new ArgumentException(
                    $"{nameof(number)} cannot be less that zero"
                );
            }
                return localFactorial(number);

                int localFactorial(int localNumber) {
                    if(localNumber < 1) return 1;
                    return localNumber * localFactorial(localNumber -1);
                }

        }

        public int CompareTo(Person other)
        {
            return Name.CompareTo(other.Name);
        }
    }
}
