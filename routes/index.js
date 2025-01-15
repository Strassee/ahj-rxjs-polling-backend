const combineRouters = require('koa-combine-routers');

const { unread } = require('./unread');

const router = combineRouters(
  unread,
);

module.exports = router;