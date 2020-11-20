#nullable enable

using System;
using System.Diagnostics;
using System.IO;
using System.Linq;
using Microsoft.Extensions.Configuration;
using static System.Convert;



namespace ds
{
    class Program
    {
        static void Main(string[] args)
        {

            //arrays();
            //LocalVariables();
           //GetKey();
          //Fuctions.RunTimesTable();
          //Fuctions.RunCaldinalToOrdinal();
         // Fuctions.RunFactorial();

         var builder = new ConfigurationBuilder()
         .SetBasePath(Directory.GetCurrentDirectory())
         .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true);

         IConfigurationRoot configuration = builder.Build();
         var ts = new TraceSwitch(
           displayName: "PacktSwitch",
           description: "This switch is set via a Json config"
         );

         configuration.GetSection("PacktSwitch").Bind(ts);

         Trace.WriteLineIf(ts.TraceError, "Trace error");
         Trace.WriteLineIf(ts.TraceWarning, "Trace warning");
         Trace.WriteLineIf(ts.TraceInfo, "Trace information");
         Trace.WriteLineIf(ts.TraceVerbose, "Trace verbose");


          
        


        
           

        }
        public static void debuuggin() {
         double a = 4.5;
         double b = 2.5;
         double answer = Debugging.Add(a,b);
         Console.WriteLine($"{a}+{b} = {answer}");
        }
        public static void Args(string[] args) {
            if (args.Length == 0)
                Console.WriteLine("Ther are no arguments");
            else
                Console.WriteLine("There is a least one argument");

            foreach (string arg in args)
            {
                Console.WriteLine(arg);
            }
        }

        public static void operators(string[] args)
        {
            iteration();
            Console.WriteLine($"There are {args.Length} arguments");

            int a = 3;
            int b = 3;
            int c = b++;

            Console.WriteLine($"a++ {a++} value a {a}");
            Console.WriteLine($"++a {++b} value a {b}");
            Console.WriteLine($"C {c}");
        }
        public static void newSwitch()
        {

        }

        public static void iteration()
        {
            int x = 0;

            while (x < 10)
            {
                Console.WriteLine(x);
                x++;
            }
            string passwod = string.Empty;

            do
            {
                Console.WriteLine("Enter your password");
                passwod = Console.ReadLine();
            } while (passwod != "PASSword");

            for (int y = 1; y <= 10; ++y)
            {

                Console.WriteLine($"for loop  {y}");
            }

            Console.WriteLine("Correct!");

            string[] names = { "Adam", "Barry", "Charlie" };

            // Not suitable when there is need to assign new values.
            foreach (string name in names)
            {

                Console.WriteLine($"{name} has {name.Length} characters");
            }

            var e = names.GetEnumerator();

            while (e.MoveNext())
            {
                string name = (string)e.Current;

                Console.WriteLine($"{name} has {name.Length} characters");
            }


        }
        public static void Conversion()
        {

            double g = 9.8;
            //using the convert namespace. Using static System.Convert
            int h = ToInt32(g);

            int number = 12;
            Console.WriteLine(number.ToString());

            bool boolean = true;
            Console.WriteLine(boolean.ToString());

        }
        public static void Foreground(string[] args)
        {

            if (args.Length < 4)
            {
                Console.WriteLine("You must specify two colors and dimensions");
                Console.WriteLine("dotnet run red yellow 80 40");
                return; //stop running
            }

            //ForegroundColor = (ConsoleColor)Enum.Parse(enumType: typeof(ConsoleColor), value: args[1], ignoreCase: true );

            //BackgroundColor = (ConsoleColor)Enum.Parse(enumType: typeof(ConsoleColor), value: args[1], ignoreCase: true );

        }

        public static void GeneralStuff()
        {

            var address = new Address();
            address.Building = null;
            address.city = "Nyeri";
            address.Region = null;

            if (address.Region != null)
            {
                Console.WriteLine(address.city);
            }
            else
            {
                Console.WriteLine("The value is Null");
            }



            Console.WriteLine("Hello World!");
            // Arrays are used to store multiple values.
            // To declare an array we define the variable with square brackets.
            int[] items = { 1, 2, 3, 4, 5 };
            string[] cars = { "volvo", "BMW", "Ford", "Mazda" };

            Console.WriteLine(GetCout(items));
            Console.WriteLine(cars.Length);
            Console.WriteLine(cars[0]);

            for (int i = 0; i < cars.Length; i++)
            {
                Console.WriteLine(cars[i]);
            }
            Console.WriteLine(".......................................");
            foreach (string i in cars)
            {
                Console.WriteLine(i);
            }
            Console.WriteLine(".......................................");

            int[] myNumbers = { 4, 1, 3, 5, 9 };
            Array.Sort(myNumbers);
            Console.WriteLine(myNumbers);
            foreach (int i in myNumbers)
            {
                Console.WriteLine(i);
            }


            Console.WriteLine($"Max: {myNumbers.Max()}");
            Console.WriteLine($"Min: {myNumbers.Min()}");
            Console.WriteLine($"Max: {myNumbers.Sum()}");

        }

        public static int GetCout(int[] items)
        {
            return items.Length;
        }

        public static void arrays()
        {
            string[] cars = new string[4];
            cars[0] = "volvo";
            cars[1] = "BMW";
            cars[2] = "Audi";
            cars[3] = "toyota";

            foreach (string car in cars)
            {
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

            // Verbatim strings
            string fullNamewithTabseparator = "edwin\tmuraya";
            string filepath = @"C:\eduuh\muraya\document.txt";
            bool happy = true;
            bool sad = false;
            Console.WriteLine($" {happy}: { sad } {fullNamewithTabseparator} {filepath}");

            object height = 1.88;
            object name2 = "Amir";

            Console.WriteLine($"{name2} is {height} metres tall.");
            int lenght1 = name.Length;
            int length2 = ((string)name).Length;


            dynamic anotherName = "Ahmed";
            anotherName = 1;

            Console.WriteLine($"{anotherName}");

        }

        public static void LocalVariables()
        {

            int population = 66000000;
            double weight = 1.88;
            decimal price = 4.99M;
            string fruit = "Apples";
            char letter = 'z';
            bool happy = true;

            Console.WriteLine($"default Datetime = {default(DateTime)}");
            Console.WriteLine($"default String = {default(String)}");
            Console.WriteLine($"default int = {default(int)}");
            Console.WriteLine($"default bool = {default(bool)}");

            Console.WriteLine(format: "{0,-8} {1,6:NO}", arg0: "Name", arg1: "Count");



        }
        public static void GetKey()
        {
            Console.Write("Press any key combinations:");
            ConsoleKeyInfo key = Console.ReadKey();
            Console.WriteLine("");
            Console.WriteLine("key: {0}, char: {1}, Modifiers: {2}", arg0: key.Key, arg1: key.KeyChar, arg2: key.Modifiers);
        }


    }

    public class Address
    {
        public string? Building;
        public string street = string.Empty;
        public string city = string.Empty;
        public string Region = string.Empty;
    }
}
