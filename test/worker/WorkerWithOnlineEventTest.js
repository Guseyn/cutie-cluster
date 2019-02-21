
'use strict'

const {
  Event
} = require('@cuties/cutie')
const {
  Assertion
} = require('@cuties/assert')
const {
  Is
} = require('@cuties/is')
const {
  If
} = require('@cuties/if-else')
const {
  WorkerWithOnlineEvent,
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

  body () {
    new Assertion(
      true
    ).after(
      new DisconnectedCluster(cluster)
    ).call()
  }
}

new If(
  new IsMaster(cluster),
  new Assertion(
    new Is(
      new WorkerWithOnlineEvent(
        new ForkedWorker(cluster), new OnlineEvent()
      ), WorkerClass
    )
  )
).call()
