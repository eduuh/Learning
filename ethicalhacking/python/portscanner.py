#/bin/python3
# python3 portscanner.py <ip>
import sys
import socket
from datetime import datetime

#Define our target
if len(sys.argv) == 2:
    target = socket.gethostbyname(sys.argv[1]) # Translate hostname to IPV
else:
    print(" Invalid amount of arguments")
    print("#python3 portscanner.py <ip>")

#Add a pretty banner

print("-"*50)
print("Scanning target"+target)
print("Time started:" +str(datetime.now()))
print("-" * 50)

try:
    for port in range(1,85):
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        socket.setdefaulttimeout(1)
        result = s.connect_ex((target, port)) # returns an erro indicator
        if result == 0:
            print("Port {} is open".format(port))
        s.close()
except KeyboardInterrupt:
       print("\n Exiting program")

except socket.error:
     print("Could connect to server")


