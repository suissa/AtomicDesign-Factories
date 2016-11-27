module.exports = (Organism) => ([
  require('./routes/get.find')(Organism),
  require('./routes/get.findById')(Organism),
  require('./routes/put.update')(Organism),
  require('./routes/delete.remove')(Organism),
  require('./routes/post.create')(Organism)
])