//Entry point
const {app, BrowserWindow} = require('electron');
const {url} = require('url');

//declaring a global variable that will hold the window object
var win = null;

//creating a function that will create the browser window
function createWindow()
{
    //initialize the win variable with browserwinder object
    win = new BrowserWindow({width:800, height:600, icon: __dirname+'/img/logo.png'});

    //load index.html
    win.loadURL(`file://${__dirname}/index.html`);

    //reset win object to null when the browser is closed
    win.on("closed", () => {
        win = null;
    }); 
}

//run create window function
app.on('ready', createWindow);

//quit when all windows are closed
app.on('window-all-closed', () =>
{
    if(process.platform !== 'darwin')
    {
        app.quit();
    }
});