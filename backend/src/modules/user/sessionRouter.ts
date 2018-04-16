import * as Router from 'koa-router';
import {getUser} from './service';

const router = new Router();
router.post('/session', (ctx, next) => {
  const param = ctx.request.query;
  //const user = await getUser(param.name, param.password);
  const user = {_id: 1, name:'xx', password: 'xxxxxx'};
  console.log(ctx.request);
  if(ctx.session){
    ctx.session.user = user;
  }
  console.log(ctx.session);
  ctx.body = 123;
});

export default router;

