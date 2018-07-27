const AsyncObject = require('@guseyn/cutie').AsyncObject;

class KilledWorker extends AsyncObject {

  constructor(worker, signal) {
    super(worker, signal || 'SIGTERM');
  }

  definedSyncCall() {
    return (worker, signal) => {
      return worker.kill(signal);
    }
  }

}

module.exports = KilledWorker;
