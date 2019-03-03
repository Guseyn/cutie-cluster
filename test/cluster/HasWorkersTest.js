
'use strict'

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
  ForkedWorker,
  IsMaster,
  DisconnectedCluster,
  HasWorkers
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
    new Assertion(
      new HasWorkers(cluster)
    ).after(
      new DisconnectedCluster(cluster)
    )
  )
).call()
