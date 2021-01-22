// Without using a transpiler
const find = require('local-devices');

const getHostsDevices = (event, arg) => {
  let { network } = arg;
  network = JSON.parse(network);

  console.log('the network after the json', network);

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
    event.reply('STARTBTN-CLICKED-Reply', devices);
  });
};

module.exports = getHostsDevices;
