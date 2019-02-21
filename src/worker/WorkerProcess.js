const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is process
class WorkerProcess extends AsyncObject {
  constructor (worker) {
    super(worker)
  }

  syncCall () {
    return (worker) => {
      return worker.process
    }
  }
}

module.exports = WorkerProcess
