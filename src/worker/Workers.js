const AsyncObject = require('@guseyn/cutie').AsyncObject;
const cluster = require('cluster');

// Represented result is object
class Workers extends AsyncObject {

  constructor() {
    super();
  }

  definedSyncCall() {
    return () => {
      return cluster.workers;
    }
  }

}

module.exports = Workers;
