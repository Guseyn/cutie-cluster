
'use strict'

const {
  Event
} = require('@cuties/cutie');
const {
  Assertion,
  EqualAssertion,
  DeepEqualAssertion
} = require('@cuties/assert');
const {
  Is,
  IsNumber,
  IsNull
} = require('@cuties/is');
const {
  If, Else
} = require('@cuties/if-else');
const {
  ClusterWithOnlineEvent,
  IsMaster,
  Worker,
  ForkedWorker,
  DisconnectedCluster
} = require('./../../index');

const cluster = require('cluster');
const WorkerClass = require('cluster').Worker;

class OnlineEvent extends Event {

  constructor() {
    super();
  }

  definedBody(worker) {
    new Assertion(
      new Is(worker, WorkerClass)
    ).after(
      new DisconnectedCluster(cluster)
    ).call();
  }

}

new If(
  new IsMaster(cluster),
  new DeepEqualAssertion(
    new ClusterWithOnlineEvent(
      cluster, new OnlineEvent()
    ), cluster
  ).after(
    new ForkedWorker(cluster)
  )
).call();
