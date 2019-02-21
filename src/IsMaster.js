const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is boolean
class IsMaster extends AsyncObject {
  constructor (cluster) {
    super(cluster)
  }

  syncCall () {
    return (cluster) => {
      return cluster.isMaster
    }
  }
}

module.exports = IsMaster
