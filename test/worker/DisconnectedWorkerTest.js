
'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  Is
} = require('@cuties/is');
const {
  If, Else
} = require('@cuties/if-else');
const {
  ClusterWithDisconnectEvent,
  ForkedWorker,
  IsMaster,
  DisconnectedWorker
} = require('./../../index');

const cluster = require('cluster');
const WorkerClass = require('cluster').Worker;

new If(
  new IsMaster(cluster),
  new Assertion(
    new Is(
      new DisconnectedWorker(
        new ForkedWorker(cluster)
      ), WorkerClass
    )
  )
).call();
