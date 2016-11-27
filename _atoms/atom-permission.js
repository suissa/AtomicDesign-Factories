const ATOM_NAME = __filename.split('atom-')[1].split('.js')[0].toLowerCase()
const VALIDATE_PATH = './../_hadrons/factoryMongooseValidade'

module.exports = {
	type: String 
, set: require('./../_quarks/toLower')
, validate: require(VALIDATE_PATH)(ATOM_NAME) //hadrons
, default: 'r'
}
