TOC
- [Todo](#todo)
- [Examples](#examples)
    - [settings (react)](#settings-react)
  - [nettools.scan() start](#nettoolsscan-start)
  - [scan() restart](#scan-restart)
  - [resolve IP address to names](#resolve-ip-address-to-names)
  - [Arp spoof](#arp-spoof)
    - [Getting GatewayIp](#getting-gatewayip)

# Todo

(x = done, ?)
- [ ] a





# Examples


all code can be excuted from commandline with in the `node` repl
``$ node``

### settings (react)

    net = require('os').networkInterfaces()

result:
    net = [ wlan0: [ {
          address: '192.168.1.26',
          netmask: '255.255.255.0',
          family: 'IPv4',
          mac: '3c:a9:f4:dd:0a:7c',
          internal: false,
          cidr: '192.168.1.26/24'
          } ]
        ]

Values of interest
    oureth='wlan0'
    ourip = net[oureth][0].address
    //192.168.1.26
Get prefix address:
    prefix = ourip.split('.').slice(0,-1).join('.')
    //192.168.1
Create start IP and end IP based on prefix:
    start = prefix + '.1'
    end = prefix + '.254'

## nettools.scan() start

    activehosts = []
    scan(start, end, [], (hosts) => { activehosts=hosts })

Example from within node on console (change 192.168.1 to your network prefix. check `ip addr`):

    nettools = require('./nettools')
    nettools.scan('192.168.1.1','192.168.1.254', [], console.log)
Example output:
    {
    '08:a6:d7:9a:98:99': '192.168.1.1',
    '70:11:d4:8b:2b:20': '192.168.1.22',
    'f8:b0:27:dc:f6:95': '192.168.1.24',
    '04:cf:dc:9d:d8:f7': '192.168.1.28'
    }

Get the output from scan() into Lan list

## scan() restart
ability for user to restart the scan which clears the current lan list and starts a new scan

## resolve IP address to names
using nettoosl.names([ipaddresses])

    node
    nettools = require('./client/server/methods/nettools.js')
    nettools.names(
      ['192.168.1.1',
       '192.168.1.22',
       '192.168.1.24',
       '192.168.1.28'], console.log)

Example Output:

    {
    '192.168.1.1': 'router.local',
    '192.168.1.22': 'pur.local',
    '192.168.1.24': 'airpurif.local',
    '192.168.1.28': 'EPSOND2F5.local'
    }

How names() works:

1. Uses ``dns`` library ``reverse()`` function.
   The function is provided the IP. This is an internal library to node (and thereby available in reactjs or electronjs): https://nodejs.org/api/dns.html -- the ``reverse()`` function sends a DNS request to your local router requesting the host name for the IP address.
2. Uses ``multicast-dns`` library
   https://www.npmjs.com/package/multicast-dns 
   This library sends a broadcast request to the network asking hosts to give us their name. Not all hosts will respond to this. On my network only my printer responded

Test:

Get a list of IP's to try and resolve names

```js
    ips=['192.168.1.1',
         '192.168.1.22',
         '192.168.1.24',
         '192.168.1.28']
```

Or you can create the ``ips`` array using local-devices:

    ```js
    hosts; 
    localdevices=require('local-devices')
    localdevices('192.168.1.1-192.168.1.254')
        .then(data=>{hosts=data)})
    ips=[]
    hosts.forEach(entry=>{ips.push(entry.ip)})
    ```

Test ``dns`` library results:

    ```js
    dns=require('dns')
    ips.forEach(ip=>{
        dns.reverse(ip, console.log)
    })
    ```

Test ``multicast-dns`` library:

    ```js
    multicastdns = require('multicast-dns');
    mdnser = multicastdns();
    mdnser.on('response',console.log)
    ips.forEach(ip=>{
        // turn 192.168.1.22 into 22.1.168.192
        pi=ip.split('.').reverse().join('.')
        // to send multicast query we have to 
        // send 22.1.168.192.in-addr.arpa
        query=pi+'.in-addr.arpa'
        mdnser.query({ id: 0, questions: [{ name: query, type: 'ANY' }] })
    })
    ```


## Arp spoof

This is how we kick devices off the network. Need to understand why ARP protocol exists, how it works.

**ARP**: it is the first protocol used by computers on a network to find each other. Inside a network the final address used to find each computer is the MAC address. It is often the case that host names are the first address used, and these are translated into IP addresses using DNS, and then IP addresses are translated into MAC addresses using ARP. 

Example: Computer at 192.168.1.12 wants to find MAC address for Printer at 192.168.1.13. Computer sends a broadcast message to all computers on the network that says "Hi, I'm 192.168.1.12 mac addr aa:bb:cc:11:22:33, whomever has 192.168.1.13 reply with your mac address".


spoofloop(params.ourmac,
          params.ourip,
          params.gatewayip,
          found_hosts,
          params.spoofinterval);
-> spoof1(ourmac, ourip, gatewayip, targetip, callback);
---> send(poison_packet(ourmac, ourip, targetip, gatewayip));
     if (gatewayip !== targetip)
       send(poison_packet(ourmac, ourip, gatewayip, targetip));

Hi, <victum_phone> the <router> is at <me_attacker_mac>


### Getting GatewayIp

In scan.js the user gives the gatewayip as argument

Or:

https://www.npmjs.com/package/network
```js
var network = require('network');
network.get_gateway_ip(function(err, ip) {
  console.log(err || ip); // err may be 'No active network interface found.'
})
```