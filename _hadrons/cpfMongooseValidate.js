
'use strict'

const QuarkName = 'CPF';

module.exports = {
  validator: require('./../quarks/is'+QuarkName)
, message: require('./../quarks/is'+QuarkName+'-message')
};
