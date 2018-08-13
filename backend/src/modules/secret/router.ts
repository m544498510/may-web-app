import * as Router from 'koa-router';

import { getUserId } from '../../utils/sessionUtils';
import * as responseUtil from '../../utils/responseUtils';
import { createSecret, deleteSecret, updateSecret, getSecretList } from './service';

const router = new Router();

router.get('/secrets', async ctx => {
  try {
    const userId = getUserId(ctx);
    const secret = await getSecretList(userId);
    responseUtil.success(ctx, secret);
  } catch (e) {
    responseUtil.error(ctx, e);
  }
});

router.post('/secret', async ctx => {
  try {
    const userId = getUserId(ctx);
    const param = ctx.request.body;
    const secret = await createSecret({
      userId,
      name: param.name,
      password: param.password,
      url: param.url,
      note: param.note,
      siteName: param.siteName,
    });
    responseUtil.success(ctx, secret);
  } catch (e) {
    responseUtil.error(ctx, e);
  }
});

router.put('/secret', async ctx => {
  try {
    const param = ctx.request.body;
    const secret = await updateSecret(param.id, {
      userId: param.userId,
      name: param.name,
      password: param.password,
      url: param.url,
      siteName: param.siteName,
      note: param.note,
    });
    responseUtil.success(ctx, secret);
  } catch (e) {
    responseUtil.error(ctx, e);
  }
});

router.delete('/secret', async ctx => {
  try {
    const secretId = ctx.request.body.id;
    await deleteSecret(secretId);
    responseUtil.success(ctx, true);
  } catch (e) {
    responseUtil.error(ctx, e);
  }
});
