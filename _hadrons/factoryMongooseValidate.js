const QUARK_PATH = './../_quarks/'

// ATOM_NAME é SEMPRE TUDO MAISUCULO
module.exports = (ATOM_NAME) => ({
  validator: require(QUARK_PATH + 'is'+ATOM_NAME)
, message: require(QUARK_PATH + 'is'+ATOM_NAME+'-message')
})
