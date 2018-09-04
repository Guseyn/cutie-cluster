
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
  WorkerWithMessageEvent,
  IsMaster,
  Worker,
  ForkedWorker,
  SentMessage,
  DisconnectedCluster
} = require('./../../index');

const cluster = require('cluster');
const WorkerClass = require('cluster').Worker;

class MessageEvent extends Event {

  constructor() {
    super();
  }

  definedBody(message) {
    new EqualAssertion(
      message, 'message'
    ).after(
      new DisconnectedCluster(
        cluster
      )
    ).call();
  }

}

new If(
  new IsMaster(cluster),
  new Assertion(
    new Is(
      new WorkerWithMessageEvent(
        new ForkedWorker(cluster), new MessageEvent()
      ), WorkerClass
    )
  ),
  new Else(
    new SentMessage(new Worker(cluster), 'message')
  )
).call();
