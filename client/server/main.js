const {
  app,
  BrowserWindow,
  Tray,
  nativeImage,
  globalShortcut,
  ipcMain,
} = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
const getHostsDevices = require('./controller/getHostsDevices/host-devices');
const getNetworkInterface = require('./controller/getNetworkInterface');
const blockHostDevice = require('./controller/blockHostDevice/blockHostDevice');

let mainWindow, tray, settingWin;

// creating the main waindow
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    fullscreenable: 'true',
    icon: path.join(__dirname, '../src/assets/logo.png'),
    webPreferences: {
      nodeIntegration: true,
      preload: `${__dirname}/preload.js`,
    },
  });

  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );

  mainWindow.webContents.openDevTools();

  mainWindow.removeMenu();
  mainWindow.on('closed', () => (mainWindow = null));
}

//  // Don't show until we are ready and loaded
//  mainWindow.once('ready-to-show', () => {
//   mainWindow.hide();
// });

//create setting window
function createSettingWindow() {
  return new Promise((resolve, reject) => {
    settingWin = new BrowserWindow({
      width: 700,
      height: 650,
      title: 'Customize Setting',
      parent: mainWindow,
      webPreferences: {
        nodeIntegration: true,
      },
    });

    settingWin.loadURL(
      isDev
        ? 'http://localhost:3000#/setting'
        : `file://${path.join(__dirname, '../build/index.html#/setting')}`
    );
    settingWin.removeMenu();
    settingWin.webContents.openDevTools();
    settingWin.on('close', () => (settingWin = null));
    settingWin.webContents.on('did-finish-load', () => {
      resolve();
    });
  });
}

// for auto reload after anychanging
require('electron-reload')(process.cwd(), {
  electron: path.join(__dirname, '../node_modules', '.bin', 'electron'),
});

// create icon on the tray
const createTray = () => {
  const icon = path.join(__dirname, '../src/assets/logo.png');
  const image = nativeImage.createFromPath(icon);

  tray = new Tray(image);
  tray.on('click', (event) => toggleWindow());
};

//togglewindow function
const toggleWindow = () => {
  mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show();
};

//*** shortcut to refresh the page//
const createRefresh = () => {
  globalShortcut.register('f5', function () {
    console.log('f5 is pressed');
    mainWindow.reload();
    settingWin.reload();
  });
  globalShortcut.register('CommandOrControl+R', function () {
    console.log('CommandOrControl+R is pressed');
    if (mainWindow) {
      mainWindow.reload();
    }
    if (settingWin) {
      settingWin.reload();
    }
  });
  globalShortcut.register('Control+Shift+I', function () {
    console.log('Control+Shift+i is pressed');
    if (mainWindow) {
      mainWindow.webContents.openDevTools();
    }
    settingWin.webContents.openDevTools();
  });
};

// listeining to React requests from landingpage
ipcMain.on('SETTINGBTN-CILICKED', (event, arg) => {
  createSettingWindow().then(settingWin.webContents.send('message-1', arg));
});

// geting all the network
ipcMain.on('Fire-GetNetworkInterface-Function', getNetworkInterface);

// ipcMain.on('', (event, arg) => {
//   console.log(arg) // prints "ping"
//   event.returnValue = 'pong'
// })

// when the start btn Clicked to start scaning the network to get the hosts
ipcMain.on('STARTSCAN-GET-HOSTS', getHostsDevices);


// kick the host outside the network
ipcMain.on('BLOCK-HOST', blockHostDevice);


//listening to close the settingWindow
ipcMain.on('DIALOG-CLOSED', (event, arg) => {
  settingWin.hide();
});

//listening to get the networksetting info and send it to mainwindow
ipcMain.on('Network-Setting', (event, arg) => {
  console.log(arg);
  mainWindow.webContents.send('NetWork-Setting-Values', arg);
});

// when ready call the functions
app.whenReady().then(() => {
  createTray();
  createWindow();
  createRefresh();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
