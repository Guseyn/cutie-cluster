const AsyncObject = require('@guseyn/cutie').AsyncObject;
const cluster = require('cluster');

class WorkerWithListeningEvent extends AsyncObject {

  constructor(worker, event) {
    super();
  }

  // event is an Event with definedBody(address)
  definedSyncCall() {
    return (worker, event) => {
      worker.on('listening', event);
      return worker;
    }
  }

}

module.exports = WorkerWithListeningEvent;
