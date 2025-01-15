const http = require('http');
const Koa = require('koa');
const koaBody = require('koa-body');

const router = require('./routes');

const app = new Koa();

const requestMethods = ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'];

app.use(koaBody({
  urlencoded: true,
  multipart: true,
}));

app.use((ctx, next) => {
  if (ctx.request.method !== 'OPTIONS') {
    next();

    return;
  }
  ctx.response.set('Access-Control-Allow-Origin', '*');

  ctx.response.set('Access-Control-Allow-Methods', 'DELETE, PUT, PATCH, GET, POST');
  ctx.response.set('Access-Control-Allow-Headers', '*');

  ctx.response.status = 204;
});

app.use(router());

const server = http.createServer(app.callback());

const port = process.env.PORT || 7070;

server.listen(port, (err) => {
  if (err) {
    console.log(err);

    return;
  }

  console.log('Server is listening to ' + port);
});
