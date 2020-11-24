using System;
using System.Threading;

namespace PacktLibrary
{
    public class Squarer
    {
        public static double Square<T>(T input)
         where T: IConvertible {
            double d = input.ToDouble(Thread.CurrentThread.CurrentCulture);
            return d * d;
        }
        
    }
}