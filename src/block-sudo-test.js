var sudo = require('sudo-prompt');

console.log('try arguments',process.argv);

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

sudo.exec(process.argv[0]+' ./block.js wlan0 192.168.178.61 192.168.178.1 8000',
  options,
  function (error, stdout, stderr) {
    if (error)
      console.error('ERROR', error);
  }
);


