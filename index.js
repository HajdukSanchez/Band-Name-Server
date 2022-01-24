require('dotenv').config() // Load .env file
const express = require('express')
const path = require('path')
const app = express() // Initialize express
// Node server
const server = require('http').createServer(app) // We connect our socket server with our application created with express
// Public path
const publicPath = path.resolve(__dirname, 'public')
// If we do that, we can import and export at the same time in our index.js file
module.exports.io = require('socket.io')(server)
require('./sockets/socket')

app.use(express.static(publicPath)) // We serve public folder

// We start the server on the port 3000
server.listen(process.env.PORT, (error) => {
  if (error) throw new Error(error)
  console.log(`Server is running on port ${process.env.PORT}`)
})
