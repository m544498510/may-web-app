import * as Router from 'koa-router';
import {getUser} from './service';

const router = new Router();

router.post('/session',  async ctx => {
  const param = ctx.request.body;
  const user = await getUser(param.name, param.password);

  if(user){
    if(ctx.session){
      ctx.session.user = user;
    }
    ctx.response.status = 200;
    ctx.body = user;
  }else{
    ctx.response.status = 400;
    ctx.body = {
      code: 1,
      msg: "user name or password error"
    };

  }
});

router.delete('/session', ctx => {
  if(ctx.session){
    ctx.session.user = null;
  }
});

export default router;

