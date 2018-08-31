
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
  ClusterWithExitEvent,
  ForkedWorker,
  DisconnectedCluster
} = require('./../../index');

const cluster = require('cluster');

class ExitEvent extends Event {

  constructor() {
    super();
  }

  definedBody(worker, code, signal) {
    new Assertion(
      new Is(worker, Object)
    ).after(
      new Assertion(
        new IsNumber(code)
      ).after(
        new Assertion(
          new IsNull(signal)
        )
      )
    ).call();
  }

}

new ForkedWorker().after(
  new DeepEqualAssertion(
    new ClusterWithExitEvent(cluster, new ExitEvent()),
    cluster
  ).after(
    new DisconnectedCluster(cluster)
  )
).call();
