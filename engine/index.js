const express = require('express')
const db = require('sqlite')

const app = express()
const port = process.env.PORT || 3000

app.get('/users', async (req, res, next) => {
  try {
    const users = await db.all('SELECT * FROM User LIMIT 10')
    res.send(users)
  } catch (err) {
    next(err)
  }
})

app.get('/clients', async (req, res, next) => {
  try {
    const clients = await db.all('SELECT * FROM Client LIMIT 10')
    res.send(clients)
  } catch (err) {
    next(err)
  }
})

app.get('/projects', async (req, res, next) => {
  try {
    const projects = await db.all('SELECT * FROM Project LIMIT 10')
    res.send(projects)
  } catch (err) {
    next(err)
  }
})

Promise.resolve()
  // First, try to open the database
  .then(() => db.open('./database.sqlite', { Promise }))
  // Update db schema to the latest version using SQL-based migrations
  .then(() => db.migrate({ force: 'last' }))
  // Display error message if something went wrong
  .catch((err) => console.error(err.stack))
  // Finally, launch the Node.js app
  .finally(() => app.listen(port))