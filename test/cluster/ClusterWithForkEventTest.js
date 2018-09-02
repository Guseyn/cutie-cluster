
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
  If
} = require('@cuties/if-else');
const {
  ClusterWithForkEvent,
  ForkedWorker,
  Worker,
  DisconnectedCluster,
  IsMaster
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

new If(
  new IsMaster(cluster),
  new DeepEqualAssertion(
    new ClusterWithForkEvent(cluster, new ForkEvent()),
    cluster
  ).after(
    new Assertion(
      new Is(new ForkedWorker(cluster), WorkerClass)
    ).after(
      new DisconnectedCluster(cluster)
    )
  )
).call();
