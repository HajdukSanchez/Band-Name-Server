const { io: server } = require('../index')
const Band = require('../models/band')
const Bands = require('../models/bands')

const bands = new Bands()
bands.addBand(new Band('Metallica'))
bands.addBand(new Band('Queen'))
bands.addBand(new Band('Iron Maiden'))
bands.addBand(new Band('Deep Purple'))
bands.addBand(new Band('Led Zeppelin'))

// Socket messages
server.on('connect', (client) => {
  console.log(`Client connected`)

  // We send a message for a new client connected
  client.emit('bands', bands.getBands())

  // ON is for listening to the client
  client.on('disconnect', () => {
    console.log('Client disconnected')
  }) // Callback qhen some client disconnect from the server

  // Event for add a Vote to specific band
  client.on('vote-band', (payload) => {
    bands.voteBand(payload.id) // Add a vote to the band
    server.emit('bands', bands.getBands()) // The server send all the bands again
  })
})
