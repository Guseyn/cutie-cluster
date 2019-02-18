const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is process
class SetupMaster extends AsyncObject {
  constructor (cluster, setting) {
    super(cluster, setting)
  }

  definedSyncCall () {
    return (cluster, setting) => {
      cluster.setupMaster(setting)
      return process
    }
  }
}

module.exports = SetupMaster
