const db = require('./_config/db')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')
const compress = require('compression')
const favicon = require('serve-favicon')

app.use(morgan('dev'))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use(compress()) // Compress response data with gzip
  // app.use(favicon(__dirname + '/favicon.ico'))


/* Cria as rotas dinamicamente a partir dos módulos */
let api = {}
let modules = require('./getModules')

const createRoutes = (element, index) => {
  api[element] = require('./modules/' + element + '/')
  app.use('/api/' + element, api[element])
}

  /* Cria as rotas dinamicamente a partir dos módulos */
modules.map(createRoutes)

app.get('/ping', function (req, res, next) {
  console.log(req.body)
  res.send('pong')
})

app.listen(port, function () {
  console.log('---------------------------------------------------------------------------')
  console.log('Express server listening on port ' + port)
  console.log('env = ' + app.get('env') +
    '\n__dirname = ' + __dirname +
    '\nprocess.cwd = ' + process.cwd())
  console.log('---------------------------------------------------------------------------')
})
