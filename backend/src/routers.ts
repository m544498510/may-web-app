import * as Router from 'koa-router';

const router = new Router();

router.use('/api', (e)=>{

});

router.get('/', (ctx, next) => {
  ctx.body = 1;
});

export default router;
