const { v4: uuidv4 } = require('uuid')

class Band {
  constructor(name = 'no name') {
    // We use the uuid library for create unique ID
    this.id = uuidv4()
    this.name = name
    this.votes = 0
  }
}

module.exports = Band
