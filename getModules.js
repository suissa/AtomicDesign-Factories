'use strict';

const fs = require('fs');
const path = require('path');
const MODULES_PATH = './modules/';

function getModules(srcpath) {
  return fs.readdirSync(srcpath).filter(function(file) {
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  });
};

module.exports = getModules(MODULES_PATH);