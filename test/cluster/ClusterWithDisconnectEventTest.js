
'use strict'

const {
  Event
} = require('@cuties/cutie');
const {
  Assertion,
  DeepEqualAssertion
} = require('@cuties/assert');
const {
  Is
} = require('@cuties/is');
const {
  ClusterWithDisconnectEvent,
  ForkedWorker,
  DisconnectedCluster
} = require('./../../index');

const cluster = require('cluster');

class DisconnectEvent extends Event {

  constructor() {
    super();
  }

  definedBody(worker) {
    new Assertion(new Is(worker, Object)).call();
  }

}

new ForkedWorker().after(
  new DeepEqualAssertion(
    new ClusterWithDisconnectEvent(cluster, new DisconnectEvent()),
    cluster
  ).after(
    new DisconnectedCluster(cluster)
  )
).call();
