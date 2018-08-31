const AsyncObject = require('@cuties/cutie').AsyncObject;
const cluster = require('cluster');

// Represented result is worker
class ForkedWorker extends AsyncObject {

  constructor(env) {
    super(env);
  }

  definedSyncCall() {
    return cluster.fork;
  }

}

module.exports = ForkedWorker;
