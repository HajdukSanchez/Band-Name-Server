const { io: server } = require('../index')

// Socket messages
server.on('connect', (client) => {
  console.log(`Client connected ${client}`)
  // ON is for listening to the client
  client.on('disconnect', () => {
    console.log('Client disconnected')
  }) // Callback qhen some client disconnect from the server

  client.on('message', (payload) => {
    console.log(`Message received: ${payload}`)
    client.broadcast.emit('message', payload['nombre']) // Emit message to all clients expect one who send the message
  })
})
