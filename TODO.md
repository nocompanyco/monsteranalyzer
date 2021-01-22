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
    oureth='wlan0'.0
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

    nettools = require('./nettools')
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

## using local-devices lib
```js
const find     = require('local-devices');

let { networkOptions, ourNetwork } = request.body;
networkOptions = JSON.parse(networkOptions);

ourNetwork = JSON.parse(ourNetwork); // e.g. wlan0-192.168.178.22
let [ourdevice, ourip] = ourNetwork.split('-');
let prefix = ourip.split('.').slice(0, -1).join('.');
let start = prefix + '.1';
let end = prefix + '.254';
console.log('scan(start/end)',start,end)

find(start+'-'+end).then(result => {
console.log(typeof result);
if (result === undefined && result === null) 
    return response
    .status(401)
    .send('there is no hosts exist at this ip address ');
else {
    console.log('second result', result)
    return setTimeout(() => {
    response.status(200).send(result);
    }, 6000);
}

})
console.log('scan() called')
```
