var network = require('network');

const getNetworkGateIP = (event, arg) => {
  network.get_gateway_ip((err, gatewayip) => {
    if (err) return console.log(err);
    console.log(gatewayip);
    event.returnValue = gatewayip;
  });
};

module.exports = getNetworkGateIP;
