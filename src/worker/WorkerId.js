const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is number
class WorkerId extends AsyncObject {

  constructor(worker) {
    super(worker);
  }

  definedSyncCall() {
    return (worker) => {
      return worker.id;
    }
  }

}

module.exports = WorkerId;
