
<h1 align="center">
<img src="src/assets/logo.png" width="250"/><br>
Monster Analyzer
</h1>

_Monster Analyzer_ is a utility for discovering hosts on your local network. It can be used to discovery the names of device owners using the local network or to kick hosts off the network.

<!-- [TODO] Think a bit more about this description -->

## Requirements:

 * libpcap (``apt-get install libpcap``)

## Setup

    git clone https://github.com/nocompanyco/monsteranalyzer.git
    cd monsteranalyzer
    npm install
    npm run electron-build
    npm start

## Troubleshooting

For any issues with using the application feel free to open an [issue](/monsteranalyzer/issues/new/choose) on github.

**Node version errors**

If when starting application you get an error about libaries compiled for a different node version, such as shown below, then rebuild the node modules for electron: ``npm run electron-build``

    [1] Error: The module 'monsteranalyzer/node_modules/pcap/build/Release/pcap_binding.node'
    [1] was compiled against a different Node.js version using
    [1] NODE_MODULE_VERSION 83. This version of Node.js requires
    [1] NODE_MODULE_VERSION 85. Please try re-compiling or re-installing

**Permissions error**

If you get an error with opening a socket with Pcap you need to provide your user with permissions to monitor the network: `` ``

    [1] Error: socket: Operation not permitted
    [1]     at new PcapSession (monsteranalyzer/node_modules/pcap/pcap.js:60:39)


**Polkit error**

If your Linux system does not have Policy Kit property configured the application may have issues with requesting permissions to monitor the network. The following error indicates this issue and a current solution is not known:

    [1] Error occurred in handler for 'BLOCK-HOST': Error: No polkit authentication agent found.


## Contribution

If you would like to help further improve this project ``ヾ(＠^∇^＠)ノ`` then please review the [contribution](contribution.md) page.
## Contributors

* [Karmel Salah](https://github.com/karmelyoei)
* [Nathan Fain](https://github.com/cyphunk)
## License

[MIT License](LICENSE.md) | © 2020 [nocompany.co](http://nocompany.co)
<!-- 
## Donate 
DONATION BUTTON
-->