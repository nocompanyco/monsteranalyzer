// const pcap = require('pcap');
const arp = require('arpjs');
var network = require('network');
var sudo = require('sudo-prompt');

const blockHostDevice = async (event, arg) => {
  // console.log('blockHostDevice arg', arg);
  // console.log(`\nsudo setcap cap_net_raw,cap_net_admin=eip ${process.argv[0]}`);
  return new Promise((resolve, reject) => {
    console.log('before the auth');

    var options = {
      name: 'Electron',
      icns: '/Applications/Electron.app/Contents/Resources/Electron.icns', // (optional)
    };

    sudo.exec(
      `setcap cap_net_raw,cap_net_admin=eip ${process.argv[0]}`,
      options,
      function (error, stdout, stderr) {
        if (error) reject(error);
        blockHost();
      }
    );

    const blockHost = () => {
      let { hostIP, ournetworkOption, gateway } = arg; // get the info from react

      console.log('gateway', gateway);

      console.log('ournetworkOption', ournetworkOption);

      if (ournetworkOption === null) {
        reject('the ournetworkOption is null');
      }

      ournetworkOption = JSON.parse(ournetworkOption);
      console.log('ournetworkOption', ournetworkOption);
      let netinterface = ournetworkOption.split('-')[0]; // this is the network interface
      console.log('netinterface', netinterface);
      let targetip = hostIP;

      console.log('hostIP', hostIP);
      console.log('targetip', targetip);

      // check if theres gateway from the user
      if (gateway === null || gateway === undefined) {
        network.get_gateway_ip(function (err, gatewayip) {
          if (err) return reject(err || gatewayip);
          // arp.setInterface(netinterface);
          // arp.poison(targetip, gatewayip); // tell target I am gateway
          resolve(true); // send back to electron that it has been blocked
        });
      }
      // arp.setInterface(netinterface);
      // arp.poison(targetip, gateway); // tell target I am gateway
      resolve(true);
    };
  });
};

module.exports = blockHostDevice;

