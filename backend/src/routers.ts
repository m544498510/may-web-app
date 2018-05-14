import * as Router from 'koa-router';
import pageRouter from './modules/page/router';
import sessionRouter from './modules/user/sessionRouter';
import userRouter from './modules/user/userRouter';

const router = new Router();

router.use('/api', sessionRouter.routes(), sessionRouter.allowedMethods());
router.use('/api', userRouter.routes(), sessionRouter.allowedMethods());

router.use(pageRouter.routes(), pageRouter.allowedMethods());

export default router;
