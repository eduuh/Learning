
start netstart server.

```
while true; do { echo -e 'HTTP/1.1 200 OK\r\n'; sh test; } | nc -l 8080; done
```
