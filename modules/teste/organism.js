// const PROJECT_NAME = 'factories'
// const PROJECT_PATH =  __dirname.split(PROJECT_NAME)[0]+PROJECT_NAME
// const FACTORIES_PATH = PROJECT_PATH + '/_factories/'
// console.log('FACTORIES_PATH', FACTORIES_PATH)

const CONFIG = require('./../../_config/project')

const name = __filename
              .split(CONFIG.PROJECT_NAME)[1]
              .split('modules')[1]
              .split('organism.js')[0]
              .replace(/\//g, '')
              .replace(/\\/g, '')

const DNA = {
	name
  // organelles: ['']
}
const Cell = require(CONFIG.FACTORIES_PATH + 'organism')(DNA)

module.exports = Cell
