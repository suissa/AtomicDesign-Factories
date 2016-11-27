const callback = function (err, data, res) {
  if (err) return console.log('ERRO: ', err)
  return res.json(data)
}

module.exports = (Model) => {
  console.log('Actions MOdel', Model)
  const Actions = {}
  
  Actions.listar = (req, res) => {
    const query = {}
    Model.find(query, (err, data) => {
      callback(err, data, res)
    })
  }
  Actions.consultar = (req, res) => {
    const query = {_id: req.params.id}
    Model.findOne(query, (err, data) => {
      callback(err, data, res)
    })
  }
  Actions.alterar = (req, res) => {
    const query = {_id: req.params.id}
    const body = req.body
    Model.update(query, body, (err, data) => {
      callback(err, data, res)
    })
  }
  Actions.remover = (req, res) => {
    const query = {_id: req.params.id}
    Model.remove(query, (err, data) => {
      callback(err, data, res)
    })
  }
  Actions.cadastrar = (req, res) => {
    const body = req.body
    Model.create(body, (err, data) => {
      callback(err, data, res)
    })
  }

  return Actions
}

