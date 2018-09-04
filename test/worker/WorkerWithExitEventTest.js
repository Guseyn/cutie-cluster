
'use strict'

const {
  AsyncObject, Event
} = require('@cuties/cutie');
const {
  Assertion,
  DeepEqualAssertion
} = require('@cuties/assert');
const {
  Is, IsNumber, IsNull
} = require('@cuties/is');
const {
  If, Else
} = require('@cuties/if-else');
const {
  WorkerWithExitEvent,
  ForkedWorker,
  Worker,
  IsMaster,
  DisconnectedWorker,
  KilledWorker
} = require('./../../index');

const cluster = require('cluster');
const WorkerClass = require('cluster').Worker;

class ExitEvent extends Event {

  constructor() {
    super();
  }

  definedBody(code, signal) {
    new Assertion(
      new IsNumber(code)
    ).after(
      new Assertion(
        new IsNull(signal)
      )
    ).call();
  }

}

new If(
  new IsMaster(cluster),
  new Assertion(
    new Is(
      new WorkerWithExitEvent(
        new ForkedWorker(cluster),
        new ExitEvent()
      ), WorkerClass
    )
  ),
  new Else(
    new DisconnectedWorker(
      new Worker(cluster)
    )
  )
).call();
