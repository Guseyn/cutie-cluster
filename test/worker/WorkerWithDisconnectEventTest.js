
'use strict'

const {
  Event
} = require('@cuties/cutie')
const {
  Assertion
} = require('@cuties/assert')
const {
  If, Else
} = require('@cuties/if-else')
const {
  WorkerWithDisconnectEvent,
  ForkedWorker,
  Worker,
  IsMaster,
  DisconnectedWorker
} = require('./../../index')
const cluster = require('cluster')

class DisconnectEvent extends Event {
  constructor () {
    super()
  }

  definedBody () {
    new Assertion(
      true
    ).call()
  }
}

new If(
  new IsMaster(cluster),
  new ForkedWorker(cluster),
  new Else(
    new WorkerWithDisconnectEvent(
      new Worker(cluster), new DisconnectEvent()
    ).after(
      new DisconnectedWorker(
        new Worker(cluster)
      )
    )
  )
).call()
