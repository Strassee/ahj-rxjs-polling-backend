const { faker } = require('@faker-js/faker');

class Message {
  constructor() {
    this.id = faker.string.uuid();
    this.from = faker.internet.email();
    this.subject = faker.lorem.lines(1);
    this.body = faker.lorem.lines(2);
    // this.received = Date.parse(faker.date.between({ from: Date.now() - 10000000, to: Date.now() }));
    this.received = Date.now();
  };

  getMessage() {
    return {
      "id": this.id,
      "from": this.from,
      "subject": this.subject,
      "body": this.body,
      "received": this.received
    }
  }
}

module.exports = { Message };