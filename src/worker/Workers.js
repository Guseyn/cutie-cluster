const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is object
class Workers extends AsyncObject {
  constructor (cluster) {
    super(cluster)
  }

  syncCall () {
    return (cluster) => {
      return cluster.workers
    }
  }
}

module.exports = Workers
