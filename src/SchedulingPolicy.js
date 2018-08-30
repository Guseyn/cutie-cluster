const AsyncObject = require('@guseyn/cutie').AsyncObject;
const cluster = require('cluster');

// Represented result is value
class SchedulingPolicy extends AsyncObject {

  constructor() {
    super();
  }

  definedSyncCall() {
    return () => {
      return cluster.schedulingPolicy;
    }
  }

}

module.exports = SchedulingPolicy;
