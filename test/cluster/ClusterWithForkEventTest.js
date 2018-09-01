
'use strict'

const {
  Event
} = require('@cuties/cutie');
const {
  Assertion,
  DeepEqualAssertion
} = require('@cuties/assert');
const {
  Is,
  IsNumber,
  IsNull
} = require('@cuties/is');
const {
  ClusterWithForkEvent,
  ForkedWorker,
  Worker,
  DisconnectedCluster
} = require('./../../index');

const cluster = require('cluster');
const WorkerClass = require('cluster').Worker;

class ForkEvent extends Event {

  constructor() {
    super();
  }

  definedBody(worker) {
    new Assertion(
      new Is(worker, WorkerClass)
    ).call();
  }

}

new DeepEqualAssertion(
  new ClusterWithForkEvent(cluster, new ForkEvent()),
  cluster
).after(
  new Assertion(
    new Is(new ForkedWorker(), WorkerClass)
  ).after(
    new DisconnectedCluster(cluster)
  )
).call();
