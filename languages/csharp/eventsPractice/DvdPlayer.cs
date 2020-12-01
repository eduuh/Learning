using static System.Console;

namespace eventsPractice
{
    public class DvdPlayer : IPlayable
    {
        public void Pause()
        {
            WriteLine("DVD player is pausing");
        }

        public void Play()
        {
            WriteLine("DvD player is playing");
        }
    }
}