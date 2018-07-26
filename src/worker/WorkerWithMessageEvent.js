const AsyncObject = require('@guseyn/cutie').AsyncObject;
const cluster = require('cluster');

class WorkerWithMessageEvent extends AsyncObject {

  constructor(worker, event) {
    super();
  }

  // event is an Event with definedBody(msg)
  definedSyncCall() {
    return (worker, event) => {
      worker.on('message', event);
      return worker;
    }
  }

}

module.exports = WorkerWithMessageEvent;
