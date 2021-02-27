var sudo = require('sudo-prompt');

console.log('try arguments', process.argv);

var options = {
  name: 'Electron',
};

// sudo.exec('id',
//   options,
//   function (error, stdout, stderr) {
//     if (error)
//       console.error('ERROR', error);
//   }
// );

console.log(
  process.argv[0] +
    ' ' +
    __dirname +
    '/block.js' +
    ' ' +
    'wlp3s0 192.168.1.7 192.168.1.1 8000'
);

sudo.exec(
  process.argv[0] +
    ' ' +
    __dirname +
    '/block.js' +
    ' ' +
    'wlp3s0 192.168.1.7 192.168.1.1 8000',
  options,
  function (error, stdout, stderr) {
    if (error) console.error('ERROR', error);
  }
);
