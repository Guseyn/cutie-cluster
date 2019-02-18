const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is cluster
class ClusterWithForkEvent extends AsyncObject {
  constructor (cluster, event) {
    super(cluster, event)
  }

  // event is an Event with definedBody(worker)
  definedSyncCall () {
    return (cluster, event) => {
      cluster.on('fork', event)
      return cluster
    }
  }
}

module.exports = ClusterWithForkEvent
