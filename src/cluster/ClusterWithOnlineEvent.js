const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is cluster
class ClusterWithOnlineEvent extends AsyncObject {
  constructor (cluster, event) {
    super(cluster, event)
  }

  // event is an Event with body(worker)
  syncCall () {
    return (cluster, event) => {
      cluster.on('online', event)
      return cluster
    }
  }
}

module.exports = ClusterWithOnlineEvent
