const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is worker
class WorkerWithDisconnectEvent extends AsyncObject {

  constructor(worker, event) {
    super(worker, event);
  }

  // event is an Event with definedBody()
  definedSyncCall() {
    return (worker, event) => {
      worker.on('disconnect', event);
      return worker;
    }
  }

}

module.exports = WorkerWithDisconnectEvent;
