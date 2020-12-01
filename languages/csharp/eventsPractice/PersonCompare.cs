using System.Collections;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;

namespace eventsPractice
{
    public class PersonCompare : IComparer<Person>
    {
        public int Compare( Person x,Person y)
        {
            // comparethe name lengths.
            int result = x.Name.Length.CompareTo(y.Name.Length);

            if (result == 0)
            {
                return result;
            }else {
              return result;
            }
        }
    }
}