import * as Router from 'koa-router';
import {createUser} from './service';

const router = new Router();
router.post('/user', async ctx => {
  const param = ctx.request.body;
  const user = await createUser(param.name, param.password);
  if (user) {
    if (ctx.session) {
      ctx.session.user = user;
    }
    ctx.status = 200;
  } else {
    ctx.status = 400;
  }
});

export default router;
