const { io: server } = require('../index')
const { ADD_BAND, ADD_VOTE, GET_BANDS, DELETE_BAND } = require('../types/band.types')
const { CONNECT, DISCONNECT } = require('../types/global.types')
const Band = require('../models/band')
const Bands = require('../models/bands')

const bands = new Bands()
bands.addBand(new Band('Metallica'))
bands.addBand(new Band('Queen'))
bands.addBand(new Band('Iron Maiden'))
bands.addBand(new Band('Deep Purple'))
bands.addBand(new Band('Led Zeppelin'))

// Socket messages
server.on(CONNECT, (client) => {
  console.log(`Client connected`)

  // We send a message for a new client connected
  client.emit(GET_BANDS, bands.getBands())

  // ON is for listening to the client
  client.on(DISCONNECT, () => {
    console.log('Client disconnected')
  }) // Callback qhen some client disconnect from the server

  // Event for add a Vote to specific band
  client.on(ADD_VOTE, (payload) => {
    bands.voteBand(payload.id) // Add a vote to the band
    server.emit(GET_BANDS, bands.getBands()) // The server send all the bands again
  })

  client.on(ADD_BAND, (payload) => {
    payload.votes ? bands.addBand(new Band(payload.name, payload.votes)) : bands.addBand(new Band(payload.name))
    server.emit(GET_BANDS, bands.getBands())
  })

  client.on(DELETE_BAND, (payload) => {
    bands.removeBand(payload.id) // Remove a band
    server.emit(GET_BANDS, bands.getBands())
  })
})
