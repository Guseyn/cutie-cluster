
'use strict'

const {
  Event, as
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
  CreatedHttpServer,
  ListeningServer,
  EndedResponse
} = require('@cuties/http');
const {
  WorkerWithListeningEvent,
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

  definedBody(address) {
    new DeepEqualAssertion(
      {address: address.address, port: address.port},
      {address: '127.0.0.1', port: 8125}
    ).after(
      new DisconnectedCluster(cluster)
    ).call();
  }

}

class RequestResponseEvent extends Event {

  constructor() {
    super();
  }

  definedBody(request, response) {
    // handle request
    new EndedResponse(response, 'fake response').call();
  }

}

new If(
  new IsMaster(cluster),
  new Assertion(
    new Is(
      new WorkerWithListeningEvent(
        new ForkedWorker(cluster),
        new ListeningEvent() 
      ), WorkerClass
    )
  ),
  new Else(
    new ListeningServer(
      new CreatedHttpServer(
        new RequestResponseEvent()
      ), 8125, '127.0.0.1'
    )
  )
).call();
