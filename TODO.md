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

    nettools.scan('192.168.178.1','192.168.178.254', [], console.log)
    {
    '08:96:d7:96:98:99': '192.168.178.1',
    '70:11:24:8d:2b:20': '192.168.178.38',
    'f8:d0:27:d2:f6:95': '192.168.178.32',
    '04:cf:8c:92:d8:f7': '192.168.178.46'
    }

Get the output from scan() into Lan list

