const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is worker
class ForkedWorker extends AsyncObject {

  constructor(cluster, env) {
    super(cluster, env);
  }

  definedSyncCall() {
    return (cluster, env) => {
      return cluster.fork(env);
    }
  }

}

module.exports = ForkedWorker;
