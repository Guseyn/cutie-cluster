const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is cluster
class ClusterWithExitEvent extends AsyncObject {
  constructor (cluster, event) {
    super(cluster, event)
  }

  // event is an Event with definedBody(worker, code, signal)
  definedSyncCall () {
    return (cluster, event) => {
      cluster.on('exit', event)
      return cluster
    }
  }
}

module.exports = ClusterWithExitEvent
