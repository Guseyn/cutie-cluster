const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is cluster
class ClusterWithOnlineEvent extends AsyncObject {

  constructor(cluster, event) {
    super();
  }

  // event is an Event with definedBody(worker)
  definedSyncCall() {
    return (cluster, event) => {
      cluster.on('online', event);
      return cluster;
    }
  }

}

module.exports = ClusterWithOnlineEvent;
