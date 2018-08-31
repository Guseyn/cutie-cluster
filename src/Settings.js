const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is object
class Settings extends AsyncObject {

  constructor(cluster) {
    super(cluster);
  }

  definedSyncCall() {
    return (cluster) => {
      return cluster.settings;
    }
  }

}

module.exports = Settings;
