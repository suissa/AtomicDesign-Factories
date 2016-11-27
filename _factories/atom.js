const CONFIG_PATH = './../_config/'

const REQUIRED = require(CONFIG_PATH + 'fields-required')
const OPTIONAL = require(CONFIG_PATH + 'fields-optional')
// const FIELDS_REMOVE = require(CONFIG_PATH + 'fields-remove')

const createRequired = (CONFIG) => ({
  type: CONFIG.type,
  validate: require(CONFIG.VALIDATE_FACTORY_PATH)(CONFIG.ATOM_NAME.toUpperCase()) 
})

const createOptional = (CONFIG) => 
  Object.keys(CONFIG)
    .filter( (key) => OPTIONAL.includes(key) )
    .map( (option, i) => Object.assign({}, {[option]: CONFIG[option]}) )
    .reduce( (acc, cur) => Object.assign(acc, {
        [Object.keys(cur)[0]]: cur[Object.keys(cur)[0]]
      }), {})

module.exports = (CONFIG) => 
  Object.assign( {}, createRequired(CONFIG), createOptional(CONFIG))



// const normalizeAtom = (Atom) => {

//   let _atom = Object.assign({}, Atom)

//   const removeFields = (field, i) => ( Object.keys(_atom).includes(field) ) 
//                                 ? _atom
//                                 : delete _atom[field] 
//   const reduceToObject =  (acc, cur) => Object.assign(acc, cur)
//   return REMOVE_FIELDS
//           .map(removeFields)
//           .reduce(reduceToObject, {})
// }