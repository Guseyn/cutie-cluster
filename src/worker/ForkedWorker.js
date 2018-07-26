const AsyncObject = require('@guseyn/cutie').AsyncObject;
const cluster = require('cluster');

class ForkedWorker extends AsyncObject {

  constructor() {
    super();
  }

  definedSyncCall() {
    return cluster.fork;
  }

}

module.exports = ForkedWorker;
