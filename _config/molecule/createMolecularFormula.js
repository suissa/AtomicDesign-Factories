const CONFIG = require('./../project')

module.exports = (acc, atom) => {
  acc[atom] = require(CONFIG.ATOMS_PATH + 'atom-' + atom)
  return Object.assign({}, acc)
}