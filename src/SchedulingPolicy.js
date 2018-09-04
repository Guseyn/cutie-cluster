const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is value(number)
class SchedulingPolicy extends AsyncObject {

  constructor(cluster) {
    super(cluster);
  }

  definedSyncCall() {
    return (cluster) => {
      return cluster.schedulingPolicy;
    }
  }

}

module.exports = SchedulingPolicy;
