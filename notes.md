To make the app listen on port 80 instead of port (8880)

`sudo iptables -t nat -I PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 8880`
