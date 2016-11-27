const CONFIG = require('./config')
const MOLECULE_CONFIG_PATH = './../../_config/molecule/'
const CREATE = 'createMolecularFormula'

const MolecularStructure = require('./molecular.structure')
const createMolecularFormula = require(MOLECULE_CONFIG_PATH + CREATE)
const Formula = MolecularStructure.reduce(createMolecularFormula, {})

const MoleculeFactory = require(CONFIG.MOLECULE_FACTORY)
const Molecule = MoleculeFactory(Formula)
// console.log(Molecule)
module.exports = Molecule
