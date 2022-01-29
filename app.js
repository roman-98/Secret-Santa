const express = require('express')
const sequelize = require('./db')
const path = require('path')
const authRoutes = require('./routes/routes')
const app = express()

sequelize.sync({force: true})
.then(() => console.log('sqlite connected'))
.catch(error => console.log(error))

app.use(express.json())

app.use('/api/routes', authRoutes)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/dist/client'))

  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(
        __dirname, 'client', 'dist', 'client', 'index.html'
      )
    )
  })
}

module.exports = app