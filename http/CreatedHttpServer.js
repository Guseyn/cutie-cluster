'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject
const http = require('http')

// Represented result is server
class CreatedHttpServer extends AsyncObject {
  constructor (options, requestListener) {
    super(options, requestListener)
  }

  syncCall () {
    return (options, requestListener) => {
      return http.createServer(options, requestListener);
    }
  }
}

module.exports = CreatedHttpServer
