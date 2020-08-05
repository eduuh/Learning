using System;

namespace c_8review
{
    class Program
    {
        static void Main(string[] args)
        {
            string s = null;

            s ??= "hello world";
            Console.WriteLine(s);

        }
    }
}
