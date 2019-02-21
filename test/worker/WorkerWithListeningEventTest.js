
'use strict'

const {
  Event
} = require('@cuties/cutie')
const {
  Assertion,
  DeepStrictEqualAssertion
} = require('@cuties/assert')
const {
  Is
} = require('@cuties/is')
const {
  If, Else
} = require('@cuties/if-else')
const FakeServer = require('./../../http/FakeServer')
const {
  WorkerWithListeningEvent,
  ForkedWorker,
  DisconnectedCluster,
  IsMaster
} = require('./../../index')
const cluster = require('cluster')
const WorkerClass = cluster.Worker

class ListeningEvent extends Event {
  constructor () {
    super()
  }

  body (address) {
    new DeepStrictEqualAssertion(
      { address: address.address, port: address.port },
      { address: '127.0.0.1', port: 8125 }
    ).after(
      new DisconnectedCluster(cluster)
    ).call()
  }
}

new If(
  new IsMaster(cluster),
  new Assertion(
    new Is(
      new WorkerWithListeningEvent(
        new ForkedWorker(cluster),
        new ListeningEvent()
      ), WorkerClass
    )
  ),
  new Else(
    new FakeServer(8125)
  )
).call()
