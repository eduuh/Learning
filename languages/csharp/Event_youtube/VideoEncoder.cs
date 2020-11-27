using System.Threading;
using System;

namespace Event_youtube
{
    
    public class videoEventArgs: EventArgs {
        public Video video { get; set; }
    }
    public class VideoEncoder
    {
        // 1- Define a delegate.
        // 2. Define an event based on that delegate.
        // 3. Raise the event

        // EventHandlers
        // EventHandler<TEventArgs>
        public event EventHandler<videoEventArgs> VideoEncoded;


        public void Encode(Video video){
           Console.WriteLine("Encoding video....");
            Thread.Sleep(3000);
            OnVideoEncoded(video);
        }
        
        protected virtual void OnVideoEncoded(Video vid){
         
         if(VideoEncoded != null){
            VideoEncoded(this, new videoEventArgs(){ video = vid});
            }
        
        }
    }
}