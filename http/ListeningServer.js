'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is server
class ListeningServer extends AsyncObject {
  constructor (server, ...args) {
    super(server, ...args)
  }

  syncCall () {
    return (server, ...args) => {
      return server.listen(...args)
    }
  }
}

module.exports = ListeningServer