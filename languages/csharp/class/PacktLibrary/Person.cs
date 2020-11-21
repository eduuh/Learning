using System;
using System.Collections.Generic;
using static System.Console;

namespace Packt.Shared
{
    public class Person : object
    {

      public readonly DateTime Instantiated;

      public Person()
      {
          Name = "Unknown";
          Instantiated = DateTime.Now;
      }

      // fields

      public const string Species = "Home Sapien"; // constant
      public readonly string HomePlanet = "Earth";
      public string Name;
      public DateTime DateofBirth;

      public WondersOfTheachientWorld Favourite;
      
      public List<Person> Childrens = new List<Person>();

        public override string ToString()
        {
            return Name;
        }

    public void writeToConsole() {
      WriteLine($"{Name}, was born on a {DateofBirth}");
    }
    
    public string GetOrigin() {
      return $"{Name} was born on {HomePlanet}";
    }
     
     public (string , int) GetFruit() {
         return ("Apples", 5);
     }

     public (string Name, int Number) GetNamedFruit() {
       return (Name: "Apples", Number: 5);
     }

     public string SayHello() {
       return $"{Name} says 'Hello!'";
     }
    
    public string SayHelloTo(string name) {
      return $"{Name} says 'Hello { name }!";
    }

    public string OptionalParameters( string command = "Run!", double number = 0.0, bool active = true) {
      return string.Format(format: "command {0} , number is {1} active is {2}", arg0: command, arg1: number, arg2: active);
    }

    public void PassingParameters(int x , ref int y, out int z) {
      z= 99;
      x++;
      y++;
      z++;
    }


    }
}
