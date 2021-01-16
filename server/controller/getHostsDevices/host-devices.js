const nettools = require('../../methods/nettools');

const getHostsDevices = (request, response, next) => {
  console.log('inside the getHostDevices');

  let { networkOptions } = request.body;
  networkOptions = JSON.parse(networkOptions);

  let { start, end } = getIP(networkOptions, 1);
  console.log(getIP(networkOptions, 1));

  const result = nettools.scan(start, end, [], console.log);

  console.log(typeof result);
  if (result === undefined && result === null)
    return response
      .status(401)
      .send('there is no hosts exist at this ip address ');
  else
  console.log('second result', result)
    return setTimeout(() => {
      response.status(200).send(result);
    }, 6000);
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
