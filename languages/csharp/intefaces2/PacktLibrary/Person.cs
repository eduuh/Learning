using System;
using System.Collections.Generic;

namespace PacktLibrary
{
    
    public class Person
    {
        public string Name { get; set; }
        public DateTime DateofBirth;
        public List<Person> Children = new List<Person>();
        
        public void WriteToconsole(){
            Console.WriteLine($"{Name} was born on a {DateofBirth:dddd}");
        }
    }
}
