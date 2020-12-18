'use strict';

const {app, Menu, BrowserWindow} = require('electron');
const fork = require('child_process').fork;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow   = null;
let scanProc     = null;
let network_settings = null;

function showMainWindow() {
  if (!scanProc) {
    const args = network_settings;
    scanProc = fork(__dirname+'/scan.js', ['--eth', args.eth, '--gateway', args.gateway, '--start', 'no']);
  }

  if (mainWindow) {
    mainWindow.show();
    return;
  }
  mainWindow = new BrowserWindow({
    width: 600, height: 650,
  title: 'Network scan and control',
    frame: true, // no removes all borders
    show: true,
    webPreferences: {
      nodeIntegration: true,
    },
    // icon: __dirname + '/build/icon.png'
  });
  // mainWindow.webContents.openDevTools();

  setTimeout(function() {
    mainWindow.loadURL('http://localhost:8083');
    mainWindow.show();
  }, 2000);

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
}


// Quit when all windows are closed.
app.on('window-all-closed', function() {
  if (scanProc !== null) scanProc.kill('SIGINT');
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform != 'darwin') {
    app.quit();
  }
});


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
  // collect arguments from npm run or direct from process
  network_settings = {
    eth: process.env.npm_config_eth|| app.commandLine.getSwitchValue("eth"),
    gateway: process.env.npm_config_gateway || app.commandLine.getSwitchValue("gateway")
  }
  if (!network_settings.eth || !network_settings.gateway) {
    console.log('app requires arguments: eth and gateway')
    app.quit();
  }
  else {
    console.log('starting with arguments:',network_settings);
    showMainWindow();
  }
});


