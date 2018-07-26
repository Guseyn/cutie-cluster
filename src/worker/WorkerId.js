const AsyncObject = require('@guseyn/cutie').AsyncObject;

class WorkerId extends AsyncObject {

  constructor(worker) {
    super(worker);
  }

  definedSyncCall() {
    return worker.id;
  }

}

module.exports = WorkerId;
