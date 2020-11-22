using static System.Console;

namespace PacktLibrary
{
    public interface IPlayable
    {
        void Play();
        void Pause();

        void Stop(){
            WriteLine("Default implementation of stop");
        }
    }

    public class DvdPlayer : IPlayable
    {
        public void Pause()
        {
            WriteLine("Dvd player is pausing");
        }

        public void Play()
        {
            WriteLine("Dvd player is playing");
        }
    }
}