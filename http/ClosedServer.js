'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is server
class ClosedServer extends AsyncObject {
  constructor (server) {
    super(server);
  }

  asyncCall () {
    return (server, callback) => {
      server.close(callback)
      this.server = server
    };
  }

  onResult () {
    return this.server
  }
}

module.exports = ClosedServer