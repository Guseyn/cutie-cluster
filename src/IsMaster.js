const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is boolean
class IsMaster extends AsyncObject {
  constructor (cluster) {
    super(cluster)
  }

  definedSyncCall () {
    return (cluster) => {
      return cluster.isMaster
    }
  }
}

module.exports = IsMaster
