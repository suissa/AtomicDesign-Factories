const mongoose = require('mongoose')
const moleculesPath = './../modules/'
const organellesPath = './../_organelles/'

module.exports = (DNA, Molecule) => {

	const organismName = DNA.name
	const Organism = mongoose.model(organismName, Molecule) // deixar generico

	let Cell = {}
	const Organelles = require('./../_config/organelles-default')

	if (Array.isArray(DNA.organelles))
		DNA.organelles.forEach((element, index) => Organelles.push(element))

	const createOrganelles = (element, index) => {
		Cell[element] = require(organellesPath+'organelle-'+element)(Organism)
	}

	Organelles.forEach(createOrganelles)
	// console.log('Cell', Cell.find)
	return Cell
}
