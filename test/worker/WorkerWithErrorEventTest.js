
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
  If, Else
} = require('@cuties/if-else')
const {
  WorkerWithErrorEvent,
  ForkedWorker,
  Worker,
  IsMaster,
  KilledWorker
} = require('./../../index')
const cluster = require('cluster')
const WorkerClass = cluster.Worker

class ErrorEvent extends Event {
  constructor () {
    super()
  }

  body (/* error */) {
    // ...
  }
}

new If(
  new IsMaster(cluster),
  new ForkedWorker(cluster),
  new Else(
    new Assertion(
      new Is(
        new WorkerWithErrorEvent(
          new Worker(cluster), new ErrorEvent()
        ), WorkerClass
      )
    ).after(
      new KilledWorker(
        new Worker(cluster)
      )
    )
  )
).call()
