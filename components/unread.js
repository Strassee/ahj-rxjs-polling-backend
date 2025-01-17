const { Message } = require('./message.js');

class UnreadMessages {
  constructor() {
    this.messages = [];
  }

  getMessages() {
    this.messages = [];
    const countMessages = this.randomInteger(1, 3);
    for(let i = 0; i < countMessages; i++) {
      this.messages.push(new Message());
    }
    this.messages.sort((a, b) => a.received > b.received ? 1 : -1)
    return this.messages;
  }

   randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

}

module.exports = { UnreadMessages };