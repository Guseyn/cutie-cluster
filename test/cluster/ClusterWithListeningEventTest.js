
'use strict'

const {
  Event, as
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
  If, Else
} = require('@cuties/if-else');
const {
  ClusterWithListeningEvent,
  ListeningWorker,
  ForkedWorker,
  DisconnectedCluster,
  IsMaster
} = require('./../../index');

const cluster = require('cluster');
const WorkerClass = require('cluster').Worker;

class ListeningEvent extends Event {

  constructor() {
    super();
  }

  definedBody(worker, address) {
    // ...
  }

}

new If(
  new IsMaster(cluster),
  new ForkedWorker(),
  new Else(
    new DeepEqualAssertion(
      new ClusterWithListeningEvent(
        cluster, new ListeningEvent()
      ),
      cluster
    ).after(new DisconnectedCluster(cluster))
  )
).call();
