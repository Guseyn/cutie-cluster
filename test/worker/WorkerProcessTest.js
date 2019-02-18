
'use strict'

const {
  as
} = require('@cuties/cutie')
const {
  Assertion,
  DeepStrictEqualAssertion
} = require('@cuties/assert')
const {
  Is
} = require('@cuties/is')
const {
  If, Else
} = require('@cuties/if-else')
const {
  ForkedWorker,
  IsMaster,
  KilledWorker,
  Worker,
  WorkerProcess
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
    new DeepStrictEqualAssertion(
      new WorkerProcess(
        new Worker(cluster).as('worker')
      ), process
    ).after(
      new KilledWorker(
        as('worker')
      )
    )
  )
).call()
