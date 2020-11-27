using System;
using System.Collections.Generic;
using static System.Console;

namespace PacktLibrary
{
    public class Person
    {
        //fields
        public string Name;
        public DateTime DateOfBirth;

        public List<Person> children = new List<Person>();
        public List<Person> wifes = new List<Person>();

        //methods

        public void WriteToConsole() {
            WriteLine($"{Name} was born on a {DateOfBirth:dddd}");
        }

        public static Person Procreate(Person p1, Person p2){
            var baby = new Person
            {
                Name = $"Baby of {p1.Name} and {p2.Name}"
            };
            return baby;
        }
        
        
    }
}
