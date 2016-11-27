const CONFIG = require('./config')
const name = require('./../../_config/organism/getName')(__filename)

const DNA = {
	name
  // organelles: ['']
}
const Cell = require(CONFIG.ORGANISM_FACTORY)(DNA)

module.exports = Cell
