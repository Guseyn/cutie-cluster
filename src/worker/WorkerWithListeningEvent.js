const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is worker
class WorkerWithListeningEvent extends AsyncObject {
  constructor (worker, event) {
    super(worker, event)
  }

  // event is an Event with body(address)
  syncCall () {
    return (worker, event) => {
      worker.on('listening', event)
      return worker
    }
  }
}

module.exports = WorkerWithListeningEvent
