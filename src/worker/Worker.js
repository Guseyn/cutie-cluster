const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is worker
class Worker extends AsyncObject {
  constructor (cluster) {
    super(cluster)
  }

  syncCall () {
    return (cluster) => {
      return cluster.worker
    }
  }
}

module.exports = Worker
