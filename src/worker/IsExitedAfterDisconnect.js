const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is boolean
class IsExitedAfterDisconnect extends AsyncObject {
  constructor (worker) {
    super(worker)
  }

  syncCall () {
    return (worker) => {
      return worker.exitedAfterDisconnect
    }
  }
}

module.exports = IsExitedAfterDisconnect
