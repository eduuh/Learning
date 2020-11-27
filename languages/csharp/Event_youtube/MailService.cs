using System.ComponentModel.Design;
using System;

namespace Event_youtube
{
    public class MailService {
        public void OnVideoEncoded(object source, videoEventArgs e){
            Console.WriteLine(
            "mailservice:  sending an email " + e.video.Title);
        }
    }
}
