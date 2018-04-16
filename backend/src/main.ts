import * as path from 'path';
import * as Koa from 'koa';

import * as session from 'koa-session';
import * as json from 'koa-json';
import * as bodyParser from 'koa-bodyparser';
import * as staticTool from 'koa-static';
import * as mongoose from 'mongoose';

import {DB_CFG, PORT} from './config';
import api from './routers';

const app = new Koa();

//add the static server
const publicPath = path.resolve(__dirname, '../public');
app.use(staticTool(publicPath));

//init session middleware
app.use(session({
  key: 'sId', /** (string) cookie key (default is koa:sess) */
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 1800000,
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
  renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
}, app));
app.use((ctx, next) => {
  //session filter
  const url = ctx.request.url;
  if (url.includes('session') || (ctx.session && ctx.session.user)) {
    next();
  }else{
    ctx.response.status = 403;
    ctx.redirect('/');
  }
});

app.use(bodyParser());
app.use(json());

//add the restful api
app.use(api.routes());

const server = app.listen(PORT, () => {
  console.log('Listening at port', server.address().port)
});

/*
mongoose.connect(DB_CFG.url)
  .then(() => {
    console.log('connect the mongodb');
  })
  .catch(e => {
    console.error(e);
  });
*/

