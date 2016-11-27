'use strict'

const QuarkName = 'Password';

module.exports = {
  validator: require('./../_quarks/is'+QuarkName)
, message: require('./../_quarks/is'+QuarkName+'-message')
};
