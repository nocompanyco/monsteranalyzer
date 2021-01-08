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
let win, tray, settingWin;

function createWindow() {
  win = new BrowserWindow({
    width: 900,
    height: 680,
    fullscreenable: 'true',
    icon: path.join(__dirname, 'assets/png/logo.png'),
    webPreferences: {
      nodeIntegration: true,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      enableRemoteModule: true
    },
  });

  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );

  win.webContents.openDevTools();

  win.removeMenu();
  win.on('closed', () => (win = null));
}

//create new window for setting
function createSettingWindow() {
  settingWin = new BrowserWindow({
    width: 400,
    height: 300,
    title: 'Customize Setting',
  });

  settingWin.loadURL(
    isDev
      ? 'http://localhost:3000/setting'
      : `file://${path.join(__dirname, '../build/index.html#/setting')}`
  );

  settingWin.on('close', () => (settingWin = null));
}


// for auto reload after anychanging
require('electron-reload')(__dirname, {
  electron: path.join('../node_modules', '.bin', 'electron'),
});

// create icon on the tray
const createTray = () => {
  const icon = path.join(__dirname, './assets/png/logo.png');
  const image = nativeImage.createFromPath(icon);

  tray = new Tray(image);
  tray.on('click', (event) => toggleWindow());
};

//togglewindow function

const toggleWindow = () => {
  win.isVisible() ? win.hide() : win.show();
};

// when ready call the functions
app.whenReady().then(() => {
  createTray();
  createWindow();
  createRefresh();
  createSettingWindow() 
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

//*** shortcut to refresh the page//
const createRefresh = () => {
  globalShortcut.register('f5', function () {
    console.log('f5 is pressed');
    win.reload();
  });
  globalShortcut.register('CommandOrControl+R', function () {
    console.log('CommandOrControl+R is pressed');
    win.reload();
  });
  globalShortcut.register('Control+Shift+I', function () {
    console.log('Control+Shift+i is pressed');
    win.webContents.openDevTools();
  });
};
