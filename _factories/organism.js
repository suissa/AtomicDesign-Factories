'use strict';

const mongoose = require('mongoose');
const moleculesPath = './../modules/';
const organellesPath = './../_organelles/';

module.exports = (DNA) => {
	const organismName = DNA.name;
	const Molecule = require(moleculesPath+organismName.toLowerCase()+'/molecule');
	const Organism = mongoose.model(organismName, Molecule);

	let Cell = {};
	const Organelles = ['create', 'find', 'findOne', 'findById' ,'update', 'remove'];

	DNA.organelles.forEach((element, index) => Organelles.push(element));

	const createOrganelles = (element, index) => {
		Cell[element] = require(organellesPath+'organelle-'+element)(Organism);
	};

	Organelles.forEach(createOrganelles);
	return Cell;
}
