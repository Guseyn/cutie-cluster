
'use strict'

const {
  as, AsyncObject
} = require('@cuties/cutie');
const {
  Assertion
} = require('@cuties/assert');
const {
  Is, IsNumber
} = require('@cuties/is');
const {
  If, Else
} = require('@cuties/if-else');
const {
  ClusterWithDisconnectEvent,
  ForkedWorker,
  IsMaster,
  KilledWorker,
  Worker,
  WorkerId
} = require('./../../index');

const cluster = require('cluster');
const WorkerClass = require('cluster').Worker;

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
).call();
