const callback = require('./organelle-response-200-json');
module.exports = (Organism) => {
  return (req, res) => {
    const query = {};
    Organism.find(query, (err, data) => callback(err, data, res));
  };
}