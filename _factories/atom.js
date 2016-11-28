const CONFIG_PATH = './../_config/'

const REQUIRED = require(CONFIG_PATH + 'fields-required')
const FIELDS_REMOVE = require(CONFIG_PATH + 'fields-remove')

const createRequired = (CONFIG) => 
  // console.log('CONFIG no atom factory', CONFIG)
  CONFIG.VALIDATE_FACTORY_PATH
    ? ({type: CONFIG.type,
        validate: require(CONFIG.VALIDATE_FACTORY_PATH)(CONFIG.ATOM_NAME.toUpperCase()) 
      })
    : ({type: CONFIG.type})

const createOptional = (CONFIG, OPTIONAL) =>
  Object.keys(CONFIG)
    .filter( Array.prototype.includes.bind(OPTIONAL) )    
    .reduce( (acc, key) => Object.assign(acc, { [key]: CONFIG[key] }), {})

module.exports = (CONFIG) => {
  const OPTIONAL = require(CONFIG_PATH + 'fields-optional')
  return Object.assign( {}, createRequired(CONFIG), createOptional(CONFIG, OPTIONAL))
}

