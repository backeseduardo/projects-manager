const express = require('express')
const router = express.Router()
const db = require('sqlite')
const projectService = require('./../_services/project')

const project = projectService(db)

router.get('/', async (req, res) => {
  try {
    const result = await project.getAll()
    res.json(result)
  } catch (err) {
    // next(err)
    res.json({
      err: err
    })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const result = await project.getById(req.params.id)
    res.json(result)
  } catch (err) {
    res.json({
      err: err
    })
  }
})

// curl -d '{"clientId": 1, "name": "TEST PROJECT 2", "isFinished": 0, "amountHours": 80}' -H "Content-Type: application/json" -X POST http://localhost:3000/project
router.post('/', async (req, res) => {
  try {
    await project.insert(req.body)
    res.end()
  } catch (err) {
    res.json({
      err: err
    })
  }
})

// curl -d '{"id": 2, "clientId": 1, "name": "TEST PROJECT 2", "isFinished": 0, "amountHours": 100}' -H "Content-Type: application/json" -X PUT http://localhost:3000/project
router.put('/', async (req, res) => {
  try {
    await project.update(req.body)
    res.end()
  } catch (err) {
    res.json({
      err: err
    })
  }
})

// curl -X DELETE http://localhost:3000/project/2
router.delete('/:id', async (req, res) => {
  try {
    await project.delete(req.params.id)
    res.end()
  } catch (err) {
    res.json({
      err: err
    })
  }
})

module.exports = router