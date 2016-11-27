const DNA = {
	name: 'Teste'
, organelles: ['findOneLogin', 'findByIdDeserializeUser']
};

const Cell = require('./../../_factories/organism')(DNA);
module.exports = Cell;
