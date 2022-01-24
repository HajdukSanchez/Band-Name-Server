const { io } = require('../index')

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
