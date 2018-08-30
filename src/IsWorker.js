const AsyncObject = require('@guseyn/cutie').AsyncObject;
const cluster = require('cluster');

// Represented result is boolean
class IsWorker extends AsyncObject {

  constructor() {
    super();
  }

  definedSyncCall() {
    return () => {
      return cluster.IsWorker;
    }
  }

}

module.exports = IsWorker;
