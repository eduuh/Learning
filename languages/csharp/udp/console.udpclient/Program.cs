using System.Threading;
using System.Threading.Tasks;
using System;
using System.Net;
using System.Net.Sockets;
using System.Text;

class Program
{
    static void Main(string[] args)
    {
        Socket s = new Socket(AddressFamily.InterNetwork, SocketType.Dgram, ProtocolType.Udp);

        for(int i=0;i<=40; i++){
        IPAddress broadcast = IPAddress.Parse("127.0.0.1");

        byte[] sendbuf = Encoding.ASCII.GetBytes(i.ToString());
        IPEndPoint ep = new IPEndPoint(broadcast, 11000);

        s.SendTo(sendbuf, ep);

        Thread.Sleep(3000);
        }

        Console.WriteLine("Message sent to the broadcast address");
    }
}
