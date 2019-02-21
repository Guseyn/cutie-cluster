
'use strict'

const {
  Event
} = require('@cuties/cutie')
const {
  Assertion,
  StrictEqualAssertion,
  DeepStrictEqualAssertion
} = require('@cuties/assert')
const {
  IsString
} = require('@cuties/is')
const {
  If, Else
} = require('@cuties/if-else')
const {
  ClusterWithMessageEvent,
  IsMaster,
  Worker,
  ForkedWorker,
  SentMessage,
  DisconnectedCluster
} = require('./../../index')
const cluster = require('cluster')

class MessageEvent extends Event {
  constructor () {
    super()
  }

  body (worker, message, handle) {
    new StrictEqualAssertion(
      message, 'message'
    ).after(
      new DisconnectedCluster(cluster)
    ).call()
  }
}

new If(
  new IsMaster(cluster),
  new DeepStrictEqualAssertion(
    new ClusterWithMessageEvent(
      cluster, new MessageEvent()
    ), cluster
  ).after(
    new ForkedWorker(cluster)
  ),
  new Else(
    new Assertion(
      new IsString(
        new SentMessage(new Worker(cluster), 'message')
      )
    )
  )
).call()
