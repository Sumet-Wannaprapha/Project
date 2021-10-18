const {
    app,
    Menu,
    BrowserWindow
} = require('electron')
const path = require('path')
const url = require('url')
let win

function createWindow() {
    
    var template = [{
           
            label: "Reload",
            submenu: [

                {
                    label: "Reload",
                    accelerator: "CmdOrCtrl+A",
                    selector: "selectAll:",
                    role: 'reload'
                },
                
                
        ]
        
        }
    ];
    
    Menu.setApplicationMenu(Menu.buildFromTemplate(template));
    win = new BrowserWindow({
        'node-integration': false,
        width: 1200,
        height: 680,
        resizable:true,
        // icon:__dirname+ './icons/icon.png'
         //autoHideMenuBar: false,
        // fullscreen:true,
        //simpleFullscreen:false,
        //frame: false 
    })

    win.webContents.openDevTools()
    win.loadURL(url.format({
        pathname: path.join(__dirname, `build/show.html`),
        
        protocol: 'file:',
        slashes: true,
    }))
    // win.loadURL('https://www.sharp-witted.com/')
    win.on('closed', () => {
        win = null
    })
}
app.on('ready', createWindow)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {

    if (win === null) {
        createWindow()
    }
})
