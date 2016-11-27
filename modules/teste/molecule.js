const CONFIG = require('./config')
const MoleculeFactory = require(CONFIG.MOLECULE_FACTORY)

// Atoms
const name = require(CONFIG.ATOMS_PATH + 'atom-name')
const email = require(CONFIG.ATOMS_PATH + 'atom-email')
const description = require(CONFIG.ATOMS_PATH + 'atom-description')
const created_at = { type: Date, default: Date.now }

// Molecular Formula
const Formula = {
  name
, email
, description
, created_at
}

const Molecule = MoleculeFactory(Formula)
// console.log(Molecule)
module.exports = Molecule
