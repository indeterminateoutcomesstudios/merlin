'use strict'
const electron = require('electron')
// adds debug features like hotkeys for triggering dev tools and reload
require('electron-debug')({ showDevTools: true })

const app = electron.app

// prevent window being garbage collected
let mainWindow

function onClosed() {
  // dereference the window
  // for multiple windows store them in an array
  mainWindow = null
}

function createMainWindow() {
  const win = new electron.BrowserWindow({
    width: 1000,
    height: 800,
  })

  win.loadURL(`file://${__dirname}/app.html`)
  win.on('closed', onClosed)

  return win
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (!mainWindow) {
    mainWindow = createMainWindow()
  }
})

app.on('ready', () => {
  mainWindow = createMainWindow()
})
