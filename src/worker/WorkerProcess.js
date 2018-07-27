const AsyncObject = require('@guseyn/cutie').AsyncObject;

class WorkerProcess extends AsyncObject {

  constructor(worker) {
    super(worker);
  }

  definedSyncCall() {
    return (worker) => {
      return worker.process;
    }
  }

}

module.exports = WorkerProcess;
