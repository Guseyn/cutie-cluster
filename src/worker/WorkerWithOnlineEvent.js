const AsyncObject = require('@cuties/cutie').AsyncObject;
const cluster = require('cluster');

// Represented result is worker
class WorkerWithOnlineEvent extends AsyncObject {

  constructor(worker, event) {
    super(worker, event);
  }

  // event is an Event with definedBody()
  definedSyncCall() {
    return (worker, event) => {
      worker.on('online', event);
      return worker;
    }
  }

}

module.exports = WorkerWithOnlineEvent;
