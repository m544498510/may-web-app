import * as Router from 'koa-router';
import {getUser} from './service';
import * as responseUtils from '../../utils/responseUtils';
import HttpError from '../../utils/HttpError';

const router = new Router();

router.post('/session',  async ctx => {
  try{
    const param = ctx.request.body;
    const user = await getUser(param.name, param.password);

    if(user){
      if(ctx.session){
        ctx.session.user = user;
      }
      responseUtils.success(ctx, user);
    }else{
      throw new HttpError('400', "user name or password error");
    }
  }catch (e) {
    responseUtils.error(ctx, e);
  }
});

router.delete('/session', ctx => {
  if(ctx.session){
    ctx.session.user = null;
  }
  responseUtils.success(ctx, true);
});

export default router;

