import * as Router from 'koa-router';
import pageRouter from './modules/page/router';
import sessionRouter from './modules/user/sessionRouter';
import userRouter from './modules/user/userRouter';
import {createUser} from "./modules/user/service";

const router = new Router();
router.get('/session', ctx => {
  ctx.body = 123;
});
router.use('/page', pageRouter.routes(), pageRouter.allowedMethods());
router.use(sessionRouter.routes(), sessionRouter.allowedMethods());
router.use(userRouter.routes(), sessionRouter.allowedMethods());
router.post('/test', async (ctx, next) => {
  const param = ctx.request.body;
  const user = await createUser(param.name, param.password);
  if (user) {
    if (ctx.session) {
      ctx.session.user = user;
    }
  } else {
    ctx.status = 400;
  }
  ctx.body = '123';
});
export default router;
