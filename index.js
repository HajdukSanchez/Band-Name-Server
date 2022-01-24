const express = require('express')
const path = require('path')
const app = express() // Initialize express
require('dotenv').config() // Load .env file

// Node server
const server = require('http').createServer(app) // We connect our socket server with our application created with express
const io = require('socket.io')(server)

// Socket messages
io.on('connection', (client) => {
  // ON is for listening to the client
  client.on('disconnect', () => {
    console.log('Client disconnected')
  }) // Callback qhen some client disconnect from the server
  client.on('message', (message) => {
    console.log(message)
    io.emit('message', { admin: 'New message' }) // Emit message to all clients connected
  })
})

// Public path
const publicPath = path.resolve(__dirname, 'public')
app.use(express.static(publicPath)) // We serve public folder

// We start the server on the port 3000
server.listen(process.env.PORT, (error) => {
  if (error) throw new Error(error)
  console.log(`Server is running on port ${process.env.PORT}`)
})
