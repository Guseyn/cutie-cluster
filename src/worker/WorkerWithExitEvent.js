const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is worker
class WorkerWithExitEvent extends AsyncObject {
  constructor (worker, event) {
    super(worker, event)
  }

  // event is an Event with body(code, signal)
  syncCall () {
    return (worker, event) => {
      worker.on('exit', event)
      return worker
    }
  }
}

module.exports = WorkerWithExitEvent
