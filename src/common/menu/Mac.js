const {Menu} = require('electron')
const name = require('electron').remote.app.getName();
const template = [
  {
    label: 'File',
    submenu: []
  }
];

module.exports = Menu.buildFromTemplate(template);