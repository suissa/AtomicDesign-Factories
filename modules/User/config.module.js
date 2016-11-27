const CONFIG = require('./config')
const name = require('./../../_config/module/getName')(__filename)
const organelles = []

const molecule = {
  structure: require('./molecular.structure')
}
const organism = { 
  name
  // organelles
}

const DNA = {
	organism,
  molecule
}
const Cell = require('./../../_factories/module')(DNA)

module.exports = Cell
