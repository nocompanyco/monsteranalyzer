//
const arp = require('node-arp'); // win/lnx/osx uses exec `ping` and `arp`.
const arpwait = 10; // wait ms between trying each ip arp/ping

function scan(ipv4_start, ipv4_end, ipv4_filter, cb) {
  // filter is []  containing ip's we ignore. such as myip and targets we already found
  // ipv4_start = 192.168.178.2
  var DEBUG = false;
  const prefix = ipv4_start.split('.').slice(0, -1).join('.');
  //    prefix = 192.168.178
  const start = parseInt(ipv4_start.split('.').slice(-1)[0]);
  //    start  = 1
  //  ipv4_end = 192.168.178.254
  const end = parseInt(ipv4_end.split('.').slice(-1)[0]);
  //    end    = 254
  //    start  = 1
  //    prefix = 192.168.178
  DEBUG &&
    console.log(
      `scan prefix:${prefix} start:${start} end:${end} filter:`,
      ipv4_filter
    );
  if (typeof ipv4_filter_optional === 'function') {
    cb = ipv4_filter_optional;
    ipv4_filter_optional = undefined;
  }
  // first call i=1
  function _recursive_check(i) {
    const ip = prefix + '.' + i;
    //    ip = 192.168.178.1
    //  ipv4_filter = ['192.168.178.26']
    if (ipv4_filter && ipv4_filter.includes(ip)) {
      DEBUG && console.log(`filter out ${ip}`);
    } else {
      DEBUG && console.log(`try ${ip}`);
      // host name: nathanscomputer
      // ip addres: 192.167.178.26    <-- this for internet communication
      // mac addre: 3c:a9:f4:21:00:7c <-- need local area network communication
      // getMAC(ip) sends a network broadcast message
      //  "hi, whoever has IP address 192.167.178.26 - let me know"
      //  "I can be reached at <my_ip_address>"
      arp.getMAC(ip, (err, mac) => {
        // console.log(`tried ${i}: ${ip}`)
        if (!err && mac && mac.split(':').length === 6)
          exports.activehosts[mac] = ip;
        else if (err)
          DEBUG && console.error(`${i}: ${ip}: error arp.getMAC:`, err);
        else
          DEBUG && console.error(`${i}: ${ip}: mac invalid arp.getMAC:`, mac);
      });
    }
    if (i < end) setTimeout(() => _recursive_check(i + 1), arpwait);
    else if (i == end && typeof cb === 'function') {
      if (Object.keys(exports.activehosts).length > 0) cb(exports.activehosts);
      else cb(null);
    }
  }
  // highly reduced version of function:
  // _recursive_check(start) => { apr.getMAC(start, (err,mac)=>{
  //                                console.log(mac)
  //                                _recursive_check(start+1)
  //                              }
  // )}
  _recursive_check(start); // 1
}

module.exports = scan;
