const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is cluster
class ClusterWithForkedWorkers extends AsyncObject {

  constructor(cluster, num, env) {
    super(cluster, num, env);
  }

  definedSyncCall() {
    return (cluster, num, env) => {
      for (let i = 0; i < num; i++) {
        cluster.fork(env);
      }
      return cluster;
    }
  }

}

module.exports = ClusterWithForkedWorkers;
