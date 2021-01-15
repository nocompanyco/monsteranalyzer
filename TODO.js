// settings (react)
  require('os').networkInterfaces()
  /*
  net=[ wlan0: [ {
        address: '192.168.178.26',
        netmask: '255.255.255.0',
        family: 'IPv4',
        mac: '3c:a9:f4:21:00:7c',
        internal: false,
        cidr: '192.168.178.26/24'
        } ]
      ]

  oureth='wlan0'
  ourip = net[oureth][0].address
  //192.168.178.26

  prefix = ourip.split('.').slice(0,-1).join('.')
  //192.168.178

  start = prefix + '.1'
  end = prefix + '.254'
  */

// give to nettools.scan()
  scan(start, end, [], (hosts)=>{
    activehosts=hosts;
  })


// get output from scan() and display in lan page