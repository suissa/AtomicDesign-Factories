const callback = require('./organelle-response-200-json');
module.exports = (Organism) => {
  return (req, res) => {
    const query = {_id: req.params.id};
    Organism.findOne(query, (err, data) => callback(err, data, res));
  }
};
