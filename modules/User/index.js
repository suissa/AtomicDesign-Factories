const CONFIG = require('./config')
const _router = require('./routes/' + CONFIG.ROUTER)
const Routes = require('./routes/')(require('./organism'))
const Router = require('./routes/' + CONFIG.ROUTES)(Routes, _router)

module.exports = Router
