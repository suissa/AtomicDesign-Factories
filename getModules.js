const fs = require('fs')
const path = require('path')
const MODULES_PATH = './modules/'

const getModules = (srcpath) => fs.readdirSync(srcpath)
                                  .filter( (file) => fs.statSync(path.join(srcpath, file))
                                                        .isDirectory())


module.exports = getModules(MODULES_PATH)