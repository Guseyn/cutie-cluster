const AsyncObject = require('@guseyn/cutie').AsyncObject;
const cluster = require('cluster');

// Represented result is boolean
class IsMaster extends AsyncObject {

  constructor() {
    super();
  }

  definedSyncCall() {
    return () => {
      return cluster.isMaster;
    }
  }

}

module.exports = IsMaster;
