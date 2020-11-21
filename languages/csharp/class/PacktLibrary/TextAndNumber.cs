namespace Packt.Shared
{
public class TextAndNumber{
    public string Text;
    public int number;
}

public class Processor {

    public TextAndNumber GetTheData() {
        return new TextAndNumber {
            Text = "What's the meaning of life?",
            number = 42
        };
    }
}
}