module.exports = (event, arg) => {
  const net = require('os').networkInterfaces();
  // console.log('getnetworkSettings net:',net)
  const filtered = {};
  // key = ['lo', 'wlan0']
  for (var key in net) {
    var addresses = net[key];
    for (var i = addresses.length; i--; ) {
      var address = addresses[i];
      // console.log('address',address)
      if (address.family === 'IPv4' && !address.internal) {
        // console.log('address IF',address)
        if (!filtered.hasOwnProperty(key)) filtered[key] = [];
        filtered[key].push(address);
      }
    }
  }

  event.reply('Selection-NetWork-Setting-Reply', filtered);
};
