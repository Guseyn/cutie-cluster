
'use strict'

const {
  as
} = require('@cuties/cutie')
const {
  Assertion
} = require('@cuties/assert')
const {
  Is, IsNumber
} = require('@cuties/is')
const {
  If, Else
} = require('@cuties/if-else')
const {
  ForkedWorker,
  IsMaster,
  KilledWorker,
  Worker,
  WorkerId
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
  ),
  new Else(
    new Assertion(
      new IsNumber(
        new WorkerId(
          new Worker(cluster).as('worker')
        )
      )
    ).after(
      new KilledWorker(
        as('worker')
      )
    )
  )
).call()
