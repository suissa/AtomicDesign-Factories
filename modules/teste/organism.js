const PROJECT_NAME = 'factories'
const PROJECT_PATH =  __dirname.split(PROJECT_NAME)[0]+PROJECT_NAME
const FACTORIES_PATH = PROJECT_PATH + '/_factories/'
console.log('FACTORIES_PATH', FACTORIES_PATH)

const name = __filename
              .split(PROJECT_NAME)[1]
              .split('modules')[1]
              .split('organism.js')[0]
              .replace(/\//g, '')
              .replace(/\\/g, '')

const DNA = {
	name
  // organelles: ['']
}
const Cell = require(FACTORIES_PATH + 'organism')(DNA)

module.exports = Cell
