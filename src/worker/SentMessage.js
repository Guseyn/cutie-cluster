const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is message
class SentMessage extends AsyncObject {
  // args are [, sendHandle][, callback]
  constructor (worker, message, ...args) {
    super(worker, message, ...args)
  }

  asyncCall () {
    return (worker, message, ...args) => {
      this.message = message
      worker.send(message, ...args)
    }
  }

  onResult () {
    return this.message
  }
}

module.exports = SentMessage
