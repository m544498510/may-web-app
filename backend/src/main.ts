import * as path from 'path';
import * as Koa from 'koa';

import * as Router from 'koa-router';
import * as json from 'koa-json';
import * as bodyParser from 'koa-bodyparser';
import * as staticTool from 'koa-static';

import * as mongoose from 'mongoose';


import {DB_CFG, PORT} from './config';

import api from './routers';

const app = new Koa();

app.use(bodyParser());
app.use(json());

//add the static server
const publicPath = path.resolve(__dirname, '../public');
app.use(staticTool(publicPath));

app.use(api.routes());

const server = app.listen(PORT, () => {
  console.log('Listening at port', server.address().port)
});

mongoose.connect(DB_CFG.url)
  .then(() => {
    console.log('connect the mongodb');
  })
  .catch(e => {
    console.error(e);
  });

