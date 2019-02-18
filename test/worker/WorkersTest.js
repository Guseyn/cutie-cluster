
'use strict'

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
  Keys
} = require('@cuties/object')
const {
  ForkedWorker,
  IsMaster,
  DisconnectedCluster,
  Workers
} = require('./../../index')
const cluster = require('cluster')
const WorkerClass = cluster.Worker

new If(
  new IsMaster(cluster),
  new Assertion(
    new Is(
      new ForkedWorker(cluster),
      WorkerClass
    )
  ).after(
    new DeepStrictEqualAssertion(
      new Keys(new Workers(cluster)),
      ['1']
    ).after(
      new DisconnectedCluster(cluster)
    )
  )
).call()
