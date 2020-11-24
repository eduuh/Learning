namespace PacktLibrary
{
    public class Thing
    {
        public object Data = default;
        public string Process(object input){
            if(Data == input) {
                return "Data and input are the same";
            }else {
                return "Data and input are Not the same.";
            }
        }
    }
}