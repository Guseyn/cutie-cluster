const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is worker
class DisconnectedWorker extends AsyncObject {

  constructor(worker) {
    super(worker);
  }

  definedSyncCall() {
    return (worker) => {
      worker.disconnect();
      return worker;
    }
  }

}

module.exports = DisconnectedWorker;
