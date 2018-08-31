const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is cluster
class ClusterWithDisconnectEvent extends AsyncObject {

  constructor(cluster, event) {
    super(cluster, event);
  }

  // event is an Event with definedBody(worker)
  definedSyncCall() {
    return (cluster, event) => {
      cluster.on('disconnect', event);
      return cluster;
    }
  }

}

module.exports = ClusterWithDisconnectEvent;
