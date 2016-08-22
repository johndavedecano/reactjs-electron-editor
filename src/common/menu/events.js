const {
  dialog,
  ipcMain
} = require('electron');
const fs = require('fs');
const path = require('path');

// Opens the file
const openFile = (focusWindow) => {
  dialog.showOpenDialog({ properties: ['openFile'] }, (fileNames) => {
    if (!fileNames) {
      return false;
    } else {
      fs.readFile(fileNames[0], 'utf-8', function (err, data) {
        if(err){
          return false;
        } else {
          return focusWindow
            .webContents
            .send(
              'fileOpened' , {
                name: path.basename(fileNames[0]),
                contents: data,
                extension: fileNames[0].split('.').pop()
              });
        }
      });
    }
  });
};

module.exports = {
  openFile: openFile
}