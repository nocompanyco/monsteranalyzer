const blockHostDevice = require('./blockHostDevice');

let fakeevent = {}
let arguments = {
  // networkinterface: "wlan0",
  // gatewayip:        "192.168.178.1", //my router
  // targetip:         "192.168.178.61", //my phone
  ournetworkOption: '"wlan0-aaaTHISISIGNOREDaaa"',
  hostIP: "192.168.178.61", // my phone
}
blockHostDevice(fakeevent, arguments).then(console.log)
setInterval(()=>{
  blockHostDevice(fakeevent, arguments).then(console.log)
},8000)

