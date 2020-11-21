using System;
using System.Collections.Generic;

namespace Packt.Shared
{

    public class ThingOfDefaults{
        public int Population;
        public DateTime when;
        public string Name;
        public List<Person> People;

        public ThingOfDefaults()
        {
            Population = default(int); // c# 2.0
            when = default;            // c# 7.1
            Name = default;            // c# 7.1
            People = default(List<Person>);
        }
    }
    
}