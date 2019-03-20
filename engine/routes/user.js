const express = require('express')
const router = express.Router()
const db = require('sqlite')
const userService = require('./../_services/user')

const user = userService(db)

router.get('/', async (req, res) => {
  try {
    const result = await user.getAll()
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
    const result = await user.getById(req.params.id)
    res.json(result)
  } catch (err) {
    res.json({
      err: err
    })
  }
})

// curl -d '{"name": "TEST POST", "login": "POST", "password": "321"}' -H "Content-Type: application/json" -X POST http://localhost:3000/user
router.post('/', async (req, res) => {
  try {
    await user.insert(req.body)
    res.end()
  } catch (err) {
    res.json({
      err: err
    })
  }
})

// curl -d '{"id": 2, "name": "POST", "login": "POST", "password": "321"}' -H "Content-Type: application/json" -X PUT http://localhost:3000/user
router.put('/', async (req, res) => {
  try {
    await user.update(req.body)
    res.end()
  } catch (err) {
    res.json({
      err: err
    })
  }
})

// curl -X DELETE http://localhost:3000/user/2
router.delete('/:id', async (req, res) => {
  try {
    await user.delete(req.params.id)
    res.end()
  } catch (err) {
    res.json({
      err: err
    })
  }
})

module.exports = router