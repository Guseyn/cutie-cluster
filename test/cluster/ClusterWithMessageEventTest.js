
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
  ClusterWithMessageEvent,
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

  definedBody(worker, message, handle) {
    new EqualAssertion(
      message, 'message'
    ).after(
      new DisconnectedCluster(cluster)
    ).call();
  }

}

new If(
  new IsMaster(cluster),
  new DeepEqualAssertion(
    new ClusterWithMessageEvent(
      cluster, new MessageEvent()
    ), cluster
  ).after(
    new ForkedWorker(cluster)
  ),
  new Else(
    new SentMessage(new Worker(cluster), 'message')
  )
).call();
