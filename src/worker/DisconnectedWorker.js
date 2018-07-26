const AsyncObject = require('@guseyn/cutie').AsyncObject;
const cluster = require('cluster');

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
