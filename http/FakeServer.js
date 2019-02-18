'use strict'

const {
  Event
} = require('@cuties/cutie')
const CreatedHttpServer = require('./CreatedHttpServer')
const ListeningServer = require('./ListeningServer')

class FakeServer {
  constructor(port) {
    return new ListeningServer(
      new CreatedHttpServer(), port, '127.0.0.1'
    )
  }
}

module.exports = FakeServer
