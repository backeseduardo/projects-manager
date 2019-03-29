const express = require('express')
const bodyParser = require('body-parser')
const db = require('sqlite')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const userRoute = require('./routes/user')
const clientRoute = require('./routes/client')
const projectRoute = require('./routes/project')

app.use('/user', userRoute)
app.use('/client', clientRoute)
app.use('/project', projectRoute)

Promise.resolve()
  // First, try to open the database
  .then(() => db.open('./database.sqlite', { Promise }))
  // Update db schema to the latest version using SQL-based migrations
  .then(() => db.migrate({ force: 'last' }))
  // Display error message if something went wrong
  .catch((err) => console.error(err.stack))
  // Finally, launch the Node.js app
  .finally(() => app.listen(port))