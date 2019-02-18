
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
  ClusterWithOnlineEvent,
  IsMaster,
  ForkedWorker,
  DisconnectedCluster
} = require('./../../index')
const cluster = require('cluster')
const WorkerClass = cluster.Worker

class OnlineEvent extends Event {
  constructor () {
    super()
  }

  definedBody (worker) {
    new Assertion(
      new Is(worker, WorkerClass)
    ).after(
      new DisconnectedCluster(cluster)
    ).call()
  }
}

new If(
  new IsMaster(cluster),
  new DeepStrictEqualAssertion(
    new ClusterWithOnlineEvent(
      cluster, new OnlineEvent()
    ), cluster
  ).after(
    new ForkedWorker(cluster)
  )
).call()
