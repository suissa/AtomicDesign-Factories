const ATOM_NAME = __filename.split('atom-')[1].split('.js')[0].toLowerCase()
const VALIDATE_TYPE = 'Mongoose'
const VALIDATE_FACTORY = 'factory' +VALIDATE_TYPE+ 'Validate'
const VALIDATE_FACTORY_PATH = './../_hadrons/' + VALIDATE_FACTORY

const CONFIG = {
  ATOM_NAME,
  VALIDATE_FACTORY_PATH,
  type: String,
  required: true
}

const Atom = require('./../_factories/atom')(CONFIG)
// console.log('Atom', Atom)
module.exports = Atom
