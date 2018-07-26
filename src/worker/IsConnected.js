const AsyncObject = require('@guseyn/cutie').AsyncObject;

class IsConnected extends AsyncObject {

  constructor(worker) {
    super(worker);
  }

  definedSyncCall() {
    return (worker) => {
      return worker.isConnected();
    }
  }

}

module.exports = IsConnected;