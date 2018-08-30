const AsyncObject = require('@guseyn/cutie').AsyncObject;
const cluster = require('cluster');

// Represented result is process
class SetupMaster extends AsyncObject {

  constructor(setting) {
    super(setting);
  }

  definedSyncCall() {
    return (setting) => {
      cluster.setupMaster(setting);
      return process;
    }
  }

}

module.exports = SetupMaster;
