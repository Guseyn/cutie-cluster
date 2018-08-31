const AsyncObject = require('@cuties/cutie').AsyncObject;
const cluster = require('cluster');

// Represented result is worker
class Worker extends AsyncObject {

  constructor() {
    super();
  }

  definedSyncCall() {
    return () => {
      return cluster.worker;
    }
  }

}

module.exports = Worker;
