const CONFIG = require('./config')
const MoleculeFactory = require(CONFIG.MOLECULE_FACTORY)
const structure = require('./molecule.structure')

const Formula = structure.reduce((acc, atom) => {
  acc[atom] = require(CONFIG.ATOMS_PATH + 'atom-' + atom)
  return Object.assign({}, acc)
}, {})

const Molecule = MoleculeFactory(Formula)
// console.log(Molecule)
module.exports = Molecule
