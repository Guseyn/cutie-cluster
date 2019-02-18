
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
  If
} = require('@cuties/if-else')
const {
  ClusterWithForkEvent,
  ForkedWorker,
  DisconnectedCluster,
  IsMaster
} = require('./../../index')
const cluster = require('cluster')
const WorkerClass = cluster.Worker

class ForkEvent extends Event {
  constructor () {
    super()
  }

  definedBody (worker) {
    new Assertion(
      new Is(worker, WorkerClass)
    ).call()
  }
}

new If(
  new IsMaster(cluster),
  new DeepStrictEqualAssertion(
    new ClusterWithForkEvent(cluster, new ForkEvent()),
    cluster
  ).after(
    new Assertion(
      new Is(new ForkedWorker(cluster), WorkerClass)
    ).after(
      new DisconnectedCluster(cluster)
    )
  )
).call()
