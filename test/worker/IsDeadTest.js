
'use strict'

const {
  as
} = require('@cuties/cutie')
const {
  Assertion
} = require('@cuties/assert')
const {
  Is, IsBoolean
} = require('@cuties/is')
const {
  If
} = require('@cuties/if-else')
const {
  ForkedWorker,
  IsMaster,
  DisconnectedCluster,
  IsDead
} = require('./../../index')
const cluster = require('cluster')
const WorkerClass = cluster.Worker

new If(
  new IsMaster(cluster),
  new Assertion(
    new Is(
      new ForkedWorker(cluster).as('worker'),
      WorkerClass
    )
  ).after(
    new Assertion(
      new IsBoolean(
        new IsDead(as('worker'))
      )
    ).after(
      new DisconnectedCluster(cluster)
    )
  )
).call()
