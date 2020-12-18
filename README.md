setup:

    apt-get install libpcap
    npm install

start:

    sudo node scan.js --eth wlan0 --gateway 192.168.1.1 --start no
    
    // Change "wlan0" to your network interface name
    // Change "192.168.1.1" to IP of router (`route -n` to check)

access Web UI:

    http://localhost:8083

start Electron UI:

    npm run rebuild_electron
    sudo npm run --eth=wlan0 --gateway=192.168.178.1 start_electron