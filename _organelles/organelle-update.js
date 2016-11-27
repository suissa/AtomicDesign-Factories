const callback = require('./organelle-response-200-json');
module.exports = (Organism) => {
  return (req, res) => {
    const query = {_id: req.params.id};
    const mod = req.body;
    Organism.update(query, mod, (err, data) => callback(err, data, res));
  }
}