
module.exports = (Organism) => {
  return (req, res) => {
    const query = {_id: req.params.id}
    
    const callback = require('./organelle-response-200-json-data')(res)

    const success = (data) => callback(data)
    const error = (err) => console.log('Error: ', err)

    return Organism.findOne(query)
    .exec()
    .then(success, error)
  }
}
