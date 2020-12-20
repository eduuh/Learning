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
        IPAddress broadcast = IPAddress.Parse("41.89.227.168");

        byte[] sendbuf = Encoding.ASCII.GetBytes(i.ToString());
        IPEndPoint ep = new IPEndPoint(broadcast, 3030);

        s.SendTo(sendbuf, ep);

        Thread.Sleep(3000);
        }

        Console.WriteLine("Message sent to the broadcast address");
    }
}
