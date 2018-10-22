const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is boolean
class IsWorker extends AsyncObject {

  constructor(cluster) {
    super(cluster);
  }

  definedSyncCall() {
    return (cluster) => {
      return cluster.isWorker;
    }
  }

}

module.exports = IsWorker;
