const { v4: uuidv4 } = require('uuid')

class Band {
  constructor(name = 'no name') {
    // We use the uuid library for create unique ID
    this.id = uuidv4()
    this.name = name
    // Random number between 500 and 1000
    this.votes = Math.floor(Math.random() * 501) + 500
  }
}

module.exports = Band
