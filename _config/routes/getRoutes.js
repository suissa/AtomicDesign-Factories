const MODULES_PATH = './../../modules/'

module.exports = (module, i) => ({ 
  path: '/api/' + module.toLowerCase() + 's', 
  module: MODULES_PATH + module })