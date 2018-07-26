const AsyncObject = require('@guseyn/cutie').AsyncObject;

class WorkerWithExitEvent extends AsyncObject {

  constructor(worker, event) {
    super();
  }

  // event is an Event with definedBody(code, signal)
  definedSyncCall() {
    return (worker, event) => {
      worker.on('exit', event);
      return worker;
    }
  }

}

module.exports = WorkerWithExitEvent;
