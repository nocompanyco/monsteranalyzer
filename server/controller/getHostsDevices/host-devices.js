// Without using a transpiler
const find = require('local-devices');

const DEBUG = true;
function __(...args) { DEBUG && console.log(...args) }

let devicesMap = new Map()  ; // acculative object to hold all found hosts forever

const getHostsDevices = (event, arg) => {
  __('getHostsDevices',arg);
  // get the network selected on the selection
  let { network } = arg;
  network = JSON.parse(network);
  // add to global log of previously found hosts and then remove duplicates
  // in this way we always add newly found hosts and never remove old hosts
  // this also resolves this issue whereby the UI sometimes shows few hosts
  // then sometimes many hosts, then back to few, and so forth and so on.


  let [device, ourip] = network.split('-');
  let prefix = ourip.split('.').slice(0, -1).join('.');
  let start = prefix + '.1';
  let end = prefix + '.254';
  // Find all devices within 192.168.0.1 to 192.168.0.25 range
  find(start + '-' + end).then((devices) => {
    /* devices is an array looking like this:
      [
        { name: '?', ip: '192.168.0.10', mac: '...' },
        { name: '...', ip: '192.168.0.17', mac: '...' },
        { name: '...', ip: '192.168.0.21', mac: '...' },
        { name: '...', ip: '192.168.0.22', mac: '...' }
      ]
    */

    // Now lets iterative over devices and add new information to our devicesMap
    // we will key the map based on the mac address (could alternatively key on ip)
    // method based on : https://stackoverflow.com/questions/54134156/javascript-merge-two-arrays-of-objects-only-if-not-duplicate-based-on-specifi/54134237#54134237
    devices.forEach(device => {
      devicesMap.set(device.mac, device);
    })
    /* ^^ above creates dictionary of: 
        {
        '08:96:d7:96:98:99' => { name: '_gateway', ip: '192.168.178.1', mac: '08:96:d7:96:98:99' },
        }

       vv below turns that dictionary back into array:
        [
         { name: '?', ip: '192.168.0.10', mac: '...' },
        ]
    */        
    let returnValue = Array.from(devicesMap, ([name, value]) => (value));
    // event.returnValue = returnValue
    event.reply('STARTSCAN-GET-HOSTS-REPLY', returnValue);

  });
};

module.exports = getHostsDevices;
