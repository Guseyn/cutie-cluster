
'use strict'

const {
  Event
} = require('@cuties/cutie')
const {
  Assertion,
  DeepStrictEqualAssertion
} = require('@cuties/assert')
const {
  Is,
  IsNumber,
  IsNull
} = require('@cuties/is')
const {
  If
} = require('@cuties/if-else')
const {
  ClusterWithExitEvent,
  ForkedWorker,
  DisconnectedCluster,
  IsMaster
} = require('./../../index')
const cluster = require('cluster')
const WorkerClass = cluster.Worker

class ExitEvent extends Event {
  constructor () {
    super()
  }

  definedBody (worker, code, signal) {
    new Assertion(
      new Is(worker, WorkerClass)
    ).after(
      new Assertion(
        new IsNumber(code)
      ).after(
        new Assertion(
          new IsNull(signal)
        )
      )
    ).call()
  }
}

new If(
  new IsMaster(cluster),
  new ForkedWorker(cluster).after(
    new DeepStrictEqualAssertion(
      new ClusterWithExitEvent(
        cluster, new ExitEvent()
      ), cluster
    ).after(
      new DisconnectedCluster(cluster)
    )
  )
).call()
