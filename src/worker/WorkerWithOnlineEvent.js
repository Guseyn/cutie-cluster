const AsyncObject = require('@guseyn/cutie').AsyncObject;
const cluster = require('cluster');

class WorkerWithOnlineEvent extends AsyncObject {

  constructor(worker, event) {
    super();
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
