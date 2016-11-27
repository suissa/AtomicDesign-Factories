const Factory = require('./../../_factories/molecule.mongoose')
const QUARKS_PATH = '../../_quarks/'
const ATOMS_PATH = './../../_atoms/'

const name = require(ATOMS_PATH + 'atom-name')
const email = require(ATOMS_PATH + 'atom-email')
const description = require(ATOMS_PATH + 'atom-description')
const created_at = { type: Date, default: Date.now }

const Formula = {
  name
, email
, description
, created_at
}

const Molecule = Factory(Formula)
// console.log(Molecule)
module.exports = Molecule
