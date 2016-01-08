var app = require('app');
var BrowserWindow = require('browser-window');
var globalShortcut = require('global-shortcut');
var opener = require('opener');

const electron = require('electron');

app.on('ready', function() {

  var ret = globalShortcut.register('`', function() {

    console.log('bind pressed');
    console.log('open search prompt');

    var electronScreen = electron.screen;
    var size = electronScreen.getPrimaryDisplay().workAreaSize;

    console.log(size);

    var width = size.width / 3;
    var height = size.height / 3;

    var mainWindow = new BrowserWindow({
      width: width,
      height: height
    });

    mainWindow.loadURL("file://" + __dirname + "/index.html");

    //opener("https://www.google.com");

  });

});
