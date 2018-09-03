
'use strict'

const {
  Assertion,
  DeepEqualAssertion
} = require('@cuties/assert');
const {
  Is
} = require('@cuties/is');
const {
  If, Else
} = require('@cuties/if-else');
const {
  Keys
} = require('@cuties/object');
const {
  ClusterWithDisconnectEvent,
  ForkedWorker,
  IsMaster,
  DisconnectedCluster,
  Workers
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
  ).after(
    new DeepEqualAssertion(
      new Keys(new Workers(cluster)),
      ['1']
    ).after(
      new DisconnectedCluster(cluster)
    )  
  )
).call();
