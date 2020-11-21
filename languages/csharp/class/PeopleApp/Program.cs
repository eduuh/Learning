using Packt.Shared;
using System;
using System.Collections.Generic;
using static System.Console;


namespace PeopleApp
{
    class Program
    {
        static void Main(string[] args)
        {

          var bob = new Person();
          bob.Name = "Bob smith";
          bob.DateofBirth = new DateTime(1965,12,22);
          bob.Favourite = WondersOfTheachientWorld.HangingGardensOfBabylon;
          bob.Childrens.Add(new Person{ Name = "Alfred "});
          bob.Childrens.Add(new Person{ Name = "Zoe"});


          WriteLine(format: "{0} was born on {1:dddd, d MMMM yyyy}", arg0: bob.Name,arg1:bob.DateofBirth);
          WriteLine(format: "{0}'s, favourite wonder is {1}. Its interger is {2} ", arg0: bob.Name, arg1: bob.Favourite, arg2: (int)bob.Favourite);
          WriteLine($"{bob.Name} has  {bob.Childrens.Count} childrens");
          WriteLine($"{bob.Name} is {Person.Species}");

          WriteLine($"{bob.Name} was born on {bob.HomePlanet}");

          foreach (var child in bob.Childrens)
          {
              WriteLine($"{child}");
          }

BankAccount.InterestRates = 0.012M;
          var jonesAccount = new BankAccount();
          jonesAccount.AccountName = "Mrs. Jones";
          jonesAccount.Balance = 2400;

          WriteLine(format: "{0}, earned {1:C} interest.",arg0: jonesAccount.AccountName
          , arg1: jonesAccount.Balance* BankAccount.InterestRates);

          var gerrierAccount = new BankAccount();
          gerrierAccount.AccountName = "Ms. Gerrier";
          gerrierAccount.Balance = 98;

          WriteLine(format: "{0}, earned {1:C} interest.", arg0: gerrierAccount.AccountName, arg1: gerrierAccount.Balance * BankAccount.InterestRates);

          var blankperson = new Person();

          (string, int) fruit = bob.GetFruit();
          WriteLine($"{fruit.Item1}, {fruit.Item2} there are");
          
          var fruitNamed = bob.GetNamedFruit();
          WriteLine($"There are {fruitNamed.Name} , {fruitNamed.Number}");

          var thing = ("Neville", 4);
          WriteLine($"{thing.Item1} has {thing.Item2}");

          var thing2 = (bob.Name, bob.Childrens.Count) ;
          WriteLine($"{thing2.Name} has {thing2.Count} children.");

          // Deconstructed tuples

          (string fruitname, int fruitNumber) = bob.GetFruit();

          WriteLine($"Deconstructed: {fruitname}, {fruitNumber}");

          WriteLine(bob.SayHello());
          WriteLine(bob.SayHelloTo("emily"));
          WriteLine(bob.OptionalParameters());
          WriteLine(bob.OptionalParameters("Jump!", 98.5));

          int a = 10;
          int b = 20;
          int c = 30;
          int d = 10;
          int e = 20;

          WriteLine($"Before: a = {a}, b= {b} c = {c}");
          bob.PassingParameters(a, ref b, out c);

          WriteLine($"After: a = {a}, b= {b} c = {c}");

          WriteLine($"Before: d = {d} , e = {e} , f does not exist yet");

          bob.PassingParameters(d, ref e , out int f) ;

          WriteLine($"After: d = {d} , e = {e} , f = {f}");

          var sam = new Person {
              Name = "sam",
              DateofBirth = new DateTime(1972, 1,2)
         };
         sam.Favourite = WondersOfTheachientWorld.ColossusOfRhodes;

         WriteLine($"Sam's favouride wonder of the world is {sam.Favourite}");

         sam.Childrens.Add(new Person{Name = "Cythia"});
         sam.Childrens.Add(new Person{Name = "Edwin"});




         

          

          




        }
    }
}