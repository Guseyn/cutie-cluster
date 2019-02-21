const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is cluster
class DisconnectedCluster extends AsyncObject {
  constructor (cluster) {
    super(cluster)
  }

  asyncCall () {
    return (cluster, callback) => {
      this.cluster = cluster
      cluster.disconnect(callback)
    }
  }

  onResult () {
    return this.cluster
  }
}

module.exports = DisconnectedCluster
