const AsyncObject = require('@guseyn/cutie').AsyncObject;
const cluster = require('cluster');

class ExitedAfterDisconnect extends AsyncObject {

  constructor(worker) {
    super(worker);
  }

  definedSyncCall() {
    return (worker) => {
      return worker.exitedAfterDisconnect;
    }
  }

}

module.exports = ExitedAfterDisconnect;
