// Without using a transpiler
const find = require('local-devices');

const getHostsDevices = (event, arg) => {
  // get the network selected on the selection
  let { network } = arg;
  network = JSON.parse(network);

  let [device, ourip] = network.split('-');
  let prefix = ourip.split('.').slice(0, -1).join('.');
  let start = prefix + '.1';
  let end = prefix + '.254';
  // Find all devices within 192.168.0.1 to 192.168.0.25 range
  find(start + '-' + end).then((devices) => {
    /*
  [
    { name: '?', ip: '192.168.0.10', mac: '...' },
    { name: '...', ip: '192.168.0.17', mac: '...' },
    { name: '...', ip: '192.168.0.21', mac: '...' },
    { name: '...', ip: '192.168.0.22', mac: '...' }
  ]
  */
    event.returnValue = devices;
  });
};

module.exports = getHostsDevices;
