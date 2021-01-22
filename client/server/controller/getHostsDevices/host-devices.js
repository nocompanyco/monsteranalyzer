const nettools = require('../../methods/nettools');

// Without using a transpiler
const find = require('local-devices');

const getHostsDevices = (event, arg) => {
  console.log('rec the network option when clicked', arg);

  console.log('inside the getHostDevices');
  let {network} = arg;
   network = JSON.parse(network);

  console.log('the network after the json', network);

  let [device,ourip] = network.split('-');
  let prefix = ourip.split('.').slice(0, -1).join('.');
  let start = prefix + '.1';
  let end = prefix + '.254';


  // Find all devices within 192.168.0.1 to 192.168.0.25 range
find(start+'-'+end).then(devices => {
  devices /*
  [
    { name: '?', ip: '192.168.0.10', mac: '...' },
    { name: '...', ip: '192.168.0.17', mac: '...' },
    { name: '...', ip: '192.168.0.21', mac: '...' },
    { name: '...', ip: '192.168.0.22', mac: '...' }
  ]
  */
  console.log('hey devices', devices)
  event.reply('STARTBTN-CLICKED-Reply', devices);

})


  // event.reply('STARTBTN-CLICKED-Reply', 'hello from the server');

  // const result = nettools.scan(start, end, [], (hostsobj) => hostobj);

  // console.log(typeof result);
  // if (result === undefined && result === null)
  //   return response
  //     .status(401)
  //     .send('there is no hosts exist at this ip address ');
  // else console.log('second result', result);

  // return console.log(nettools.scan(start, end, [], {}));
};

// preparing the ip adrress with start 1 and en with 254 fro the nettools function
const getIP = (networkOptions, index) => {
  let oureth = Object.keys(networkOptions)[index];

  let ourip = networkOptions[oureth][0].address;
  //127.0.0.1
  console.log(ourip);

  let prefix = ourip.split('.').slice(0, -1).join('.');
  console.log(prefix);
  //127.0.0

  //Create start IP and end IP based on prefix:
  let start = prefix + '.1';
  let end = prefix + '.254';
  return { start, end };
};

module.exports = getHostsDevices;
