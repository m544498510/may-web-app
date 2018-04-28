import * as Router from 'koa-router';
import pageRouter from './modules/page/router';
import sessionRouter from './modules/user/sessionRouter';
import userRouter from './modules/user/userRouter';
import {createUser} from "./modules/user/service";

const router = new Router();

router.use('/page', pageRouter.routes(), pageRouter.allowedMethods());
router.use(sessionRouter.routes(), sessionRouter.allowedMethods());
router.use(userRouter.routes(), sessionRouter.allowedMethods());

export default router;
