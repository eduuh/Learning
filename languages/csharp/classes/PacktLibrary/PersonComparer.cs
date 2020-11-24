using System.Collections.Generic;

namespace Packt.shared
{

    public class PersonComparer : IComparer<Person>
    {

        public int Compare(Person x, Person y)
        {
            // compare the Name lengths.
            int result = x.Name.Length.CompareTo(y.Name.Length);
            if(result == 0) {
                return x.Name.CompareTo(y.Name);
            }else{
                return result;
            }

        }
    }

}