var app = require('app')
var BrowserWindow = require('browser-window')
var globalShortcut = require('global-shortcut')

app.on('ready', function() {

  var ret = globalShortcut.register('`', function() {

    console.log('bind pressed');
    console.log('open search prompt');

    var mainWindow = new BrowserWindow({
      width: 800,
      height: 600
    })

    mainWindow.loadURL("file://" + __dirname + "/index.html")
  })

})
