module.exports = (QuarkName) => ({
  validator: require('./../quarks/is'+QuarkName)
, message: require('./../quarks/is'+QuarkName+'-message')
})
