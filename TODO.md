all code can be excuted from commandline with in the `node` repl
``$ node``

### settings (react)

    net = require('os').networkInterfaces()

result:
    net = [ wlan0: [ {
          address: '192.168.178.26',
          netmask: '255.255.255.0',
          family: 'IPv4',
          mac: '3c:a9:f4:21:00:7c',
          internal: false,
          cidr: '192.168.178.26/24'
          } ]
        ]

Values of interest
    oureth='wlan0'
    ourip = net[oureth][0].address
    //192.168.178.26
Get prefix address:
    prefix = ourip.split('.').slice(0,-1).join('.')
    //192.168.178
Create start IP and end IP based on prefix:
    start = prefix + '.1'
    end = prefix + '.254'

## nettools.scan() start

    activehosts = []
    scan(start, end, [], (hosts) => { activehosts=hosts })

Example from within node on console (change 192.168.178 to your network prefix. check `ip addr`):

    nettools = require('./nettools')
    nettools.scan('192.168.178.1','192.168.178.254', [], console.log)
Example output:
    {
    '08:96:d7:96:98:99': '192.168.178.1',
    '70:11:24:8d:2b:20': '192.168.178.38',
    'f8:d0:27:d2:f6:95': '192.168.178.32',
    '04:cf:8c:92:d8:f7': '192.168.178.46'
    }

Get the output from scan() into Lan list

## scan() restart
ability for user to restart the scan which clears the current lan list and starts a new scan

## resolve IP address to names
using nettoosl.names([ipaddresses])

    node
    nettools = require('./client/server/methods/nettools.js')
    nettools.names(
      ['192.168.178.1',
       '192.168.178.38',
       '192.168.178.46',
       '192.168.178.32'], console.log)

Example Output:

    {
    '192.168.178.1': 'fritz.box',
    '192.168.178.38': 'purzel.fritz.box',
    '192.168.178.46': 'zhimi-airpurifier-mc1-miio132082121.fritz.box',
    '192.168.178.32': 'EPSOND2F695.fritz.box'
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
    ips=['192.168.178.1',
         '192.168.178.38',
         '192.168.178.46',
         '192.168.178.32']
```

Or you can create the ``ips`` array using local-devices:

    ```js
    hosts; 
    localdevices=require('local-devices')
    localdevices('192.168.178.1-192.168.178.254')
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
        // turn 192.168.178.22 into 22.178.168.192
        pi=ip.split('.').reverse().join('.')
        // to send multicast query we have to 
        // send 22.178.168.192.in-addr.arpa
        query=pi+'.in-addr.arpa'
        mdnser.query({ id: 0, questions: [{ name: query, type: 'ANY' }] })
    })
    ```

