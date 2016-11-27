const ROUTE = __filename.split('routes')[1].slice(1)
const METHOD = ROUTE.split('.')[0]
const ACTION = ROUTE.split('.')[1]
const PATHS = require('./paths')

module.exports = (Organism) => ({
  method: METHOD,
  path: PATHS.id,
  action: Organism[ACTION]
})