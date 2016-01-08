var app = require('app');
var BrowserWindow = require('browser-window');
var globalShortcut = require('global-shortcut');
var opener = require('opener');

app.on('ready', function() {

  var ret = globalShortcut.register('`', function() {

    console.log('bind pressed');
    console.log('open search prompt');

    var mainWindow = new BrowserWindow({
      useContentSize: true;
    });

    mainWindow.loadURL("file://" + __dirname + "/index.html");

    opener("https://www.google.com");

  });

});
