const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is cluster
class ClusterWithListeningEvent extends AsyncObject {
  constructor (cluster, event) {
    super(cluster, event)
  }

  // event is an Event with body(worker, address)
  syncCall () {
    return (cluster, event) => {
      cluster.on('listening', event)
      return cluster
    }
  }
}

module.exports = ClusterWithListeningEvent
