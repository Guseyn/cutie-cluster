const AsyncObject = require('@guseyn/cutie').AsyncObject;

class WorkerWithDisconnectEvent extends AsyncObject {

  constructor(worker, event) {
    super();
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
