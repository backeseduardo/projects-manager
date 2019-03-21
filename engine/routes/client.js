const express = require('express')
const router = express.Router()
const db = require('sqlite')
const clientService = require('./../_services/client')

const client = clientService(db)

router.get('/', async (req, res) => {
  try {
    const result = await client.getAll()
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
    const result = await client.getById(req.params.id)
    res.json(result)
  } catch (err) {
    res.json({
      err: err
    })
  }
})

// curl -d '{"userId": 1, "name": "CLIENT TEST POST", "isActive": 1}' -H "Content-Type: application/json" -X POST http://localhost:3000/client
router.post('/', async (req, res) => {
  try {
    await client.insert(req.body)
    res.end()
  } catch (err) {
    res.json({
      err: err
    })
  }
})

// curl -d '{"id": 2, "userId": 1, "name": "CLIENT POST", "isActive": 0}' -H "Content-Type: application/json" -X PUT http://localhost:3000/client
router.put('/', async (req, res) => {
  try {
    await client.update(req.body)
    res.end()
  } catch (err) {
    res.json({
      err: err
    })
  }
})

// curl -X DELETE http://localhost:3000/client/2
router.delete('/:id', async (req, res) => {
  try {
    await client.delete(req.params.id)
    res.end()
  } catch (err) {
    res.json({
      err: err
    })
  }
})

module.exports = router