import * as Router from 'koa-router';

import {getUserId} from '../../utils/sessionUtils';
import {errorResponseHandle} from '../../utils/responseHandle';
import {createSecret, deleteSecret, updateSecret, getSecretList} from './service';

const router = new Router();

router.get('/secrets', async ctx => {
  try {
    if (ctx.session) {
      const userId = getUserId(ctx);
      ctx.body = await getSecretList(userId);
    }
  } catch (e) {
    errorResponseHandle(ctx, e);
  }
});

router.post('/secret', async ctx => {
  try {
    const userId = getUserId(ctx);
    const param = ctx.request.body;
    ctx.body = await createSecret({
      userId,
      name: param.name,
      password: param.password,
      url: param.url
    });
  } catch (e) {
    errorResponseHandle(ctx, e);
  }
});

router.put('/secret', async ctx => {
  try {
    const param = ctx.request.body;
    ctx.body = await updateSecret(param.id, {
      userId: param.userId,
      name: param.name,
      password: param.password,
      url: param.url
    });
  } catch (e) {
    errorResponseHandle(ctx, e);
  }
});

router.delete('/secret', async ctx => {
  try{
    const secretId = ctx.request.body.id;
    ctx.body = await deleteSecret(secretId);
  }catch (e) {
    errorResponseHandle(ctx, e);
  }
});
