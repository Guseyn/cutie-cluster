const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is worker
class KilledWorker extends AsyncObject {

  constructor(worker, signal) {
    super(worker, signal || 'SIGTERM');
  }

  definedSyncCall() {
    return (worker, signal) => {
      worker.kill(signal);
      return worker;
    }
  }

}

module.exports = KilledWorker;
