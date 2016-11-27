const _router = require('./routerExpress')
const Routes = require('./routes')(require('./organism'))
const Router = require('./routesExpress')(Routes, _router)

module.exports = Router
