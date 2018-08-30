const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is cluster
class ClusterWithMessageEvent extends AsyncObject {

  constructor(cluster, event) {
    super();
  }

  // event is an Event with definedBody(worker, message, handle)
  definedSyncCall() {
    return (cluster, event) => {
      cluster.on('message', event);
      return cluster;
    }
  }

}

module.exports = ClusterWithMessageEvent;