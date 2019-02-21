
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
  ClusterWithListeningEvent,
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

  body (worker, address) {
    new Assertion(
      new Is(worker, WorkerClass)
    ).after(
      new DeepStrictEqualAssertion(
        { address: address.address, port: address.port },
        { address: '127.0.0.1', port: 8124 }
      ).after(
        new DisconnectedCluster(cluster)
      )
    ).call()
  }
}

new If(
  new IsMaster(cluster),
  new DeepStrictEqualAssertion(
    new ClusterWithListeningEvent(
      cluster, new ListeningEvent()
    ),
    cluster
  ).after(
    new ForkedWorker(cluster)
  ),
  new Else(
    new FakeServer(8124)
  )
).call()
