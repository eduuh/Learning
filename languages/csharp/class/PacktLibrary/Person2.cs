using System.Collections.Generic;

namespace Packt.Shared
{
    public partial class Person {
        private string favouriteprimaryColor;
        public string FavouritePrimaryColor{
            get {
                return favouriteprimaryColor;
            }
            set {
                switch (value.ToLower())
                {
                    case "red":
                    case "green":
                    case "blue":
                      favouriteprimaryColor = value;
                      break;
                    default:
                     throw new System.ArgumentException(
                         $"{value} is not a primary color." + 
                         "Choose from: red, green , blue."
                     );
                }
            }
        }
 public List<Person> wifes = new List<Person>();
        public Person this[int index] {
            get {
                return Childrens[index];
            } set {
                Childrens[index] = value;
            }
        }
    }
}