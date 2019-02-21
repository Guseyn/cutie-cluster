const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is worker
class WorkerWithDisconnectEvent extends AsyncObject {
  constructor (worker, event) {
    super(worker, event)
  }

  // event is an Event with body()
  syncCall () {
    return (worker, event) => {
      worker.on('disconnect', event)
      return worker
    }
  }
}

module.exports = WorkerWithDisconnectEvent
