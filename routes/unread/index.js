const { UnreadMessages } = require('../../components/unread');

const Router = require('koa-router');

const unread = new Router();

const unMessages = new UnreadMessages();

unread.get('/messages/unread', async (ctx) => {
  ctx.response.set('Access-Control-Allow-Origin', '*');
  ctx.response.set('Access-Control-Allow-Methods', 'DELETE, PUT, PATCH, GET, POST');
  if(Math.random() > 0.5) {
    ctx.response.status = 500;
    return;
  }
  ctx.response.status = 200;
  ctx.response.body = {
    "status": "ok",
    "timestamp": Date.now(),
    "messages": unMessages.getMessages()
  }

});

module.exports = { unread };
