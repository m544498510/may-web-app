import * as Router from 'koa-router';
import {createUser, getAllUser} from './service';
import * as responseUtils from '../../utils/responseUtils';
import HttpError from '../../utils/HttpError';

const router = new Router();
router.post('/user', async ctx => {
  try{
    const param = ctx.request.body;
    const user = await createUser(param.name, param.password);
    if (user) {
      if (ctx.session) {
        ctx.session.user = user;
      }
      responseUtils.success(ctx, true);
    } else {
      throw new HttpError('1', 'create user failed!');
    }
  }catch (e) {
    responseUtils.error(ctx, e);
  }
});

router.get('/userList', async ctx => {
  try{
    const userList = await getAllUser();
    responseUtils.success(ctx, userList);
  }catch (e) {
    responseUtils.error(ctx, e);
  }
});

export default router;
