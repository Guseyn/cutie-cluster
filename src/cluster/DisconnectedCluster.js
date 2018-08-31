const AsyncObject = require('@cuties/cutie').AsyncObject;
const cluster = require('cluster');

// Represented result is cluster
class DisconnectedCluster extends AsyncObject {

  constructor(cluster) {
    super(cluster);
  }

  definedAsyncCall() {
    return (cluster, callback) => {
      this.cluster = cluster;
      cluster.disconnect(callback);
    }
  }

  onResult() {
    return this.cluster;
  }

}

module.exports = DisconnectedCluster;
