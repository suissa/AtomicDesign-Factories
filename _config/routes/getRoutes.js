const MODULES_PATH = './../../modules/'

module.exports = (module, i) => ({ 
  path: '/api/' + module.toLowerCase(), 
  module: MODULES_PATH + module })