const { faker } = require('@faker-js/faker');

class Message {
  constructor(
    id = faker.string.uuid(),
    from = faker.internet.email(),
    subject = faker.lorem.lines(1),
    body = faker.lorem.lines(2),
    received = Date.now()
    // received = Date.parse(faker.date.between({ from: Date.now() - 10000000, to: Date.now() }))
  ) {
    this.id = id;
    this.from = from;
    this.subject = subject;
    this.body = body;
    this.received = received;
  };

//   getMessage() {
//     const {id, from, subject, body, received } = this;
//     return {
//       id,
//       from,
//       subject,
//       body,
//       received
//     }
//   }

}

module.exports = { Message };