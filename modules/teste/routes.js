const express = require('express')
const router = express.Router()
const Controller = require("./organism")

// Create
router.post('/', (req, res, next) => {
  Controller.create(req, res)
})
// Retrieve
router.get('/', (req, res, next) => {
  Controller.find(req, res)
})
// get by id
router.get('/:id', (req, res, next) => {
  Controller.findById(req, res)
})
// Update
router.put('/:id', (req, res, next) => {
  Controller.update(req, res)
})
// Delete
router.delete('/:id', (req, res, next) => {
  Controller.remove(req, res)
})

module.exports = router
