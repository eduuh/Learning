using System;
using static System.Math;

namespace functionalprogramming
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            var circle = new Circle();
            circle.Radius = 20;

            Console.WriteLine(circle.stats);
        }
    }

    public class Circle {

     public double Radius { get; set; }
     public double Circumference => PI * 2 * Radius;

     public double Area {
         get {
             double Square(double d) => Pow(d,2);
             return PI * Square(Radius);
         }
     }
     public (double circumference, double Area) stats => (Circumference, Area);
}
}
