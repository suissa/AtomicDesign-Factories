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
