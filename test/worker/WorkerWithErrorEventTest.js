
'use strict'

const {
  AsyncObject, Event
} = require('@cuties/cutie');
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
  WorkerWithErrorEvent,
  ForkedWorker,
  Worker,
  IsMaster,
  DisconnectedWorker,
  KilledWorker
} = require('./../../index');

const cluster = require('cluster');
const WorkerClass = require('cluster').Worker;

class ErrorEvent extends Event {

  constructor() {
    super();
  }

  definedBody(error) {
    // ...
  }

}

new If(
  new IsMaster(cluster),
  new ForkedWorker(cluster),
  new Else(
    new Assertion(
      new Is(
        new WorkerWithErrorEvent(
          new Worker(cluster), new ErrorEvent()
        ), WorkerClass
      )
    ).after(
      new KilledWorker(
        new Worker(cluster)
      )
    )
  )
).call();