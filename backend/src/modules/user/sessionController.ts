import * as Router from 'koa-router';

const router = new Router();
router.post('/', (ctx, next) => {


});

export default (new Router()).use('/session', router.routes(), router.allowedMethods());

