using System;

namespace Event_youtube
{
    class Program
    {
        static void Main(string[] args)
        {
            var video = new Video() { Title = "video" };
            var videoEncoder = new VideoEncoder(); // publisher
            var mailservice = new MailService(); // subscriber
            var messageservice = new MessageService(); // subscriber
            
            

            videoEncoder.VideoEncoded += mailservice.OnVideoEncoded;
            videoEncoder.VideoEncoded += messageservice.OnVideoEncoded;


            videoEncoder.Encode(video);


        }
    }
    
    public class MessageService {
    
    public void OnVideoEncoded(object source, videoEventArgs args){
            Console.WriteLine("Message service: sending a mesage "+ args.video.Title);
        }
    }
}
