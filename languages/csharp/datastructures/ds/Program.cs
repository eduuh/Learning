using System;
using System.Linq;


namespace ds
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            // Arrays are used to store multiple values.
            // To declare an array we define the variable with square brackets.
            int[] items = {1,2,3,4,5};
            string[] cars = {"volvo", "BMW", "Ford", "Mazda"};

            Console.WriteLine(GetCout(items));
            Console.WriteLine(cars.Length);
            Console.WriteLine(cars[0]);

            for(int i=0; i< cars.Length; i++){
              Console.WriteLine(cars[i]);
            }
            Console.WriteLine(".......................................");
            foreach(string i in cars) {
              Console.WriteLine(i);
            }
            Console.WriteLine(".......................................");

            int[] myNumbers = {4,1,3,5,9};
            Array.Sort(myNumbers);
            Console.WriteLine(myNumbers);
            foreach (int i in myNumbers )
            {
              Console.WriteLine(i);
            }

            Console.WriteLine($"Max: {myNumbers.Max()}");
            Console.WriteLine($"Min: {myNumbers.Min()}");
            Console.WriteLine($"Max: {myNumbers.Sum()}");

       arrays();
           
        }

        public static int GetCout(int[] items){
            return items.Length;
        }

        public static void arrays() {
          string[] cars = new string[4];
          cars[0] = "volvo";
          cars[1] = "BMW";
          cars[2] = "Audi";
          cars[3] = "toyota";
         
          foreach(string car in cars) {
            Console.WriteLine(car);
          }

          string name = "John";
          Console.WriteLine(name);

          int mynum = 15;
          Console.WriteLine(mynum);
          mynum = 34;

          // constants
          const int myNum = 15;
          double myDoubleNum = 5.99D;
          char myletter = 'D';
          bool mybool = true;
          string myText = "hello";

          Console.WriteLine($" { myNum } +   {myDoubleNum} + {myletter} + {mybool} + {myText}");

          // concatenation
          string firstName = "John";
          string lastname = "Doe";
          string fullName = firstName + lastname;
          Console.WriteLine(fullName);

         int x = 5;
         int y = 6;
         Console.WriteLine(x + y);
         int x2 = 4, y2 = 6, z3 = 50;
         Console.WriteLine($"{x2}");

         // Good
         int minutesPerHour = 60;
         int m = 79;
         Console.WriteLine($"{ minutesPerHour } + { m }");

          
        }
    }
}
