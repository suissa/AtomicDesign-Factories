const callback = require('./organelle-response-200-json');
module.exports = (Organism) => {
  return (req, res) => {
    const dados = req.body;
    const model = new Organism(dados);

    model.save( (err, data) => callback(err, data, res));
  };
}
