
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
  WorkerWithOnlineEvent,
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

  definedBody() {
    new Assertion(
      true
    ).after(
      new DisconnectedCluster(cluster)
    ).call();
  }

}

new If(
  new IsMaster(cluster),
  new Assertion(
    new Is(
      new WorkerWithOnlineEvent(
        new ForkedWorker(cluster), new OnlineEvent()
      ), WorkerClass
    )
  )
).call();
