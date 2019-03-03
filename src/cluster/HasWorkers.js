const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is boolean
class HasWorkers extends AsyncObject {
  constructor (cluster) {
    super(cluster)
  }

  syncCall () {
    return (cluster) => {
      return Object.keys(cluster.workers) > 0
    }
  }
}

module.exports = HasWorkers
