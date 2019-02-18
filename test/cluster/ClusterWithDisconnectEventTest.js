
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
  ClusterWithDisconnectEvent,
  ForkedWorker,
  IsMaster,
  DisconnectedCluster
} = require('./../../index')
const cluster = require('cluster')
const WorkerClass = cluster.Worker

class DisconnectEvent extends Event {
  constructor () {
    super()
  }

  definedBody (worker) {
    new Assertion(new Is(worker, WorkerClass)).call()
  }
}

new If(
  new IsMaster(cluster),
  new ForkedWorker(cluster).after(
    new DeepStrictEqualAssertion(
      new ClusterWithDisconnectEvent(
        cluster, new DisconnectEvent()
      ), cluster
    ).after(
      new DisconnectedCluster(cluster)
    )
  )
).call()
