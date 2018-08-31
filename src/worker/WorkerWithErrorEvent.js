const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is worker
class WorkerWithErrorEvent extends AsyncObject {

  constructor(worker, event) {
    super(worker, event);
  }

  // event is an Event with definedBody(error)
  definedSyncCall() {
    return (worker, event) => {
      worker.on('error', event);
      return worker;
    }
  }

}

module.exports = WorkerWithErrorEvent;
