const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is boolean
class IsDead extends AsyncObject {

  constructor(worker) {
    super(worker);
  }

  definedSyncCall() {
    return (worker) => {
      return worker.isDead();
    }
  }

}

module.exports = IsDead;
