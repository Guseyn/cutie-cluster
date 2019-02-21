const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is boolean
class IsConnected extends AsyncObject {
  constructor (worker) {
    super(worker)
  }

  syncCall () {
    return (worker) => {
      return worker.isConnected()
    }
  }
}

module.exports = IsConnected
