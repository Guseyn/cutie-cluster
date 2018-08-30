const AsyncObject = require('@guseyn/cutie').AsyncObject;
const cluster = require('cluster');

// Represented result is worker
class WorkerWithListeningEvent extends AsyncObject {

  constructor(worker, event) {
    super(worker, event);
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
