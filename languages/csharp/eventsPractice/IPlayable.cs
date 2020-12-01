using static System.Console;

namespace eventsPractice
{
    public interface IPlayable
    {
        void Play();
        void Pause();
        
        void Stop(){
            WriteLine("Default implementation of stop.");
        }
    }
}