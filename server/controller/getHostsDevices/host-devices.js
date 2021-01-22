const nettools = require('../../methods/nettools');
const find     = require('local-devices');

const getHostsDevices = (request, response, next) => {
  console.log('inside the getHostDevices', request.body);

  let { networkOptions, ourNetwork } = request.body;
  networkOptions = JSON.parse(networkOptions);

  // let { start, end } = getIP(networkOptions, 1);
  // console.log(getIP(networkOptions, 1));

  ourNetwork = JSON.parse(ourNetwork); // e.g. wlan0-192.168.178.22
  let [ourdevice, ourip] = ourNetwork.split('-');
  let prefix = ourip.split('.').slice(0, -1).join('.');
  let start = prefix + '.1';
  let end = prefix + '.254';
  console.log('scan(start/end)',start,end)
  // const result = nettools.scan(start, end, [], console.log);
  // nettools.scan(start, end, [], result => {
  //   console.log(typeof result);
  //   if (result === undefined && result === null) 
  //     return response
  //       .status(401)
  //       .send('there is no hosts exist at this ip address ');
  //   else {
  //     console.log('second result', result)
  //     return setTimeout(() => {
  //       response.status(200).send(result);
  //     }, 6000);
  //   }
  
  // });
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

  // console.log(typeof result);
  // if (result === undefined && result === null)
  //   return response
  //     .status(401)
  //     .send('there is no hosts exist at this ip address ');
  // else
  // console.log('second result', result)
  //   return setTimeout(() => {
  //     response.status(200).send(result);
  //   }, 6000);
};

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
