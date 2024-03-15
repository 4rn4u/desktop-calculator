const { app, BrowserWindow } = require('electron');
const path = require('assets\icon.png');

function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 325,
    height: 410,
    webPreferences: {
      nodeIntegration: true
    },
    icon: path.join(__dirname, 'assets\icon.png'),
    resizable: false,
    maximizable: false,
  });

  // and load the index.html of the app.
  win.loadFile('index.html');
  win.setMenu(null);
}

app.whenReady().then(createWindow);

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
