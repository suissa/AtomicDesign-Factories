const mongoose = require('mongoose')
const moleculesPath = './../modules/'
const FACTORY_ORGANISM = require('./organism')
const FACTORY_MOLECULE = require('./molecule')
const FACTORY_ATOM = require('./atom')

module.exports = (DNA) => {
  // console.log('DNA.molecularStructure', DNA.molecularStructure)
  const molecule = FACTORY_MOLECULE(DNA.molecule.structure)
	const organism = FACTORY_ORGANISM(DNA.organism, molecule)

  const module = {
    organism,
    molecule
  }
	return module
}
