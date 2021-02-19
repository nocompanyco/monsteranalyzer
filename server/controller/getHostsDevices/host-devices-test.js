const getHostsDevices = require('./host-devices');

let fakeevent = {}
let arguments = {network: '"wlan0-192.168.178.1"'}
getHostsDevices(fakeevent, arguments)
setInterval(()=>{
  getHostsDevices(fakeevent, arguments)
},10000)

//
// MONITOR getHostsDevices:
//
setInterval(()=>{
 console.log('fakeevent',fakeevent);
 if (fakeevent.hasOwnProperty('returnValue'))
  console.log('number of hosts',fakeevent.returnValue.length) 
},2000)

