const blockHostDevice = require('./blockHostDevice');

let fakeevent = {}
let arguments = {
  networkinterface: "wlan0",
  gatewayip:        "192.168.0.1", //my router
  targetip:         "192.168.0.20" //my phone
}
blockHostDevice(fakeevent, arguments)
setInterval(()=>{
  blockHostDevice(fakeevent, arguments)
},4000)

