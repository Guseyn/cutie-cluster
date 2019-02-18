const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is worker
class WorkerWithMessageEvent extends AsyncObject {
  constructor (worker, event) {
    super(worker, event)
  }

  // event is an Event with definedBody(msg)
  definedSyncCall () {
    return (worker, event) => {
      worker.on('message', event)
      return worker
    }
  }
}

module.exports = WorkerWithMessageEvent
