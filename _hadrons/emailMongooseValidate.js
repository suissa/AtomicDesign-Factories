'use strict'

const QuarkName = 'Email';

module.exports = {
  validator: require('./../_quarks/is'+QuarkName)
, message: require('./../_quarks/is'+QuarkName+'-message')
};
