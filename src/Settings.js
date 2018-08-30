const AsyncObject = require('@guseyn/cutie').AsyncObject;
const cluster = require('cluster');

// Represented result is object
class Settings extends AsyncObject {

  constructor() {
    super();
  }

  definedSyncCall() {
    return () => {
      return cluster.settings;
    }
  }

}

module.exports = Settings;
