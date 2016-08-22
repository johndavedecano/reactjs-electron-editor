let Menu = null;

if (process.platform === 'darwin') { 
  Menu = require('./Mac');
} else {
  Menu = require('./Win');
}

module.exports = Menu;