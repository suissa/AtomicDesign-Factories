'use strict'

const QuarkName = 'String-lengthGTE3';

module.exports = {
  validator: require('./../_quarks/is'+QuarkName)
, message: require('./../_quarks/is'+QuarkName+'-message')
};
