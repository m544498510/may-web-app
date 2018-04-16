import * as Router from 'koa-router';
import pageRouter from './modules/page/router';
import sessionRouter from './modules/user/sessionRouter';

const router = new Router();
router.get('/session', ctx => {
  ctx.body = 123;
});
router.use('/page', pageRouter.routes(), pageRouter.allowedMethods());
router.use(sessionRouter.routes(), sessionRouter.allowedMethods());

export default router;
