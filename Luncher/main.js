const { app,globalShortcut, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.maximize(true); //for maximize screen
  win.setMenuBarVisibility(false)

  win.loadFile('web/index.html')
}


app.whenReady().then( () => {
    globalShortcut.register("Insert", () => {
        console.log('shorcut')
    })
}).then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
