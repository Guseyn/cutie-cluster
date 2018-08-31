const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is message
class SentMessage extends AsyncObject {

  // args are [, sendHandle][, callback]
  constructor(worker, message, ...args) {
    super(worker, message, ...args);
  }

  definedSyncCall() {
    return (worker, message, ...args) => {
      worker.send(message, ...args);
      return message;
    }
  }

}

module.exports = SentMessage;
