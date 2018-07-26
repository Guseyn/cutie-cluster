const AsyncObject = require('@guseyn/cutie').AsyncObject;

class WorkerWithErrorEvent extends AsyncObject {

  constructor(worker, event) {
    super();
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
