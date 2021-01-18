using System.Runtime.CompilerServices;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using NuJson = System.Text.Json.JsonSerializer;

namespace json
{
    class Program
    {
        static async Task Main(string[] args)
        {
            var path = @"./response.json";
            var loadedsg = await Program.ConveretJsontoObject<SpeedGovernor>(path);

            foreach (var item  in loadedsg)
                {
                    Console.WriteLine($"{item.imei}");
                }
            
        }

        public static async Task<List<T>> ConveretJsontoObject<T>(string path)
        {
            FileStream jsonload = File.Open(path, FileMode.Open);

            var loadedsg = (List<T>)
                      await NuJson.DeserializeAsync(
                        utf8Json: jsonload,
                        returnType: typeof(List<T>)
                      );
            return loadedsg;
        }
    }
}
