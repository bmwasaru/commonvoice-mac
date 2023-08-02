const { menubar } = require('menubar');
const path = require('path');
const app = require('electron')

const iconPath = path.join(__dirname, 'icon.png');

const mb = menubar({
    icon: iconPath,
    browserWindow: {
        webPreferences: {
          webviewTag: true,
          // nativeWindowOpen: true,
        },
        width: 450,
        height: 550,
      },
      showOnAllWorkspaces: true,
      preloadWindow: true,
})

mb.on('ready', () => {

})