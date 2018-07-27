const AsyncObject = require('@guseyn/cutie').AsyncObject;

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
