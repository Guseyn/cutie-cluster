
'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  Is, IsBoolean
} = require('@cuties/is');
const {
  If, Else
} = require('@cuties/if-else');
const {
  ClusterWithDisconnectEvent,
  ForkedWorker,
  IsMaster,
  IsWorker,
  DisconnectedCluster
} = require('./../index');

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
      new IsBoolean(
        new IsWorker(cluster)
      )
    )
  )
).after(
  new If(
    new IsMaster(cluster),
    new DisconnectedCluster(cluster)
  )
).call();
