import {createReadStream} from 'fs';
import * as path from 'path';
import * as Router from 'koa-router';

const publicPath = path.resolve(__dirname, '../../../public');
const router = new Router();

router.get('/*', ctx => {
  const url = ctx.url;
  if (!url.includes('/api') && !url.includes('.') && !url.includes('/public')) {
    ctx.response.type = 'html';
    ctx.response.body = createReadStream(path.resolve(publicPath, './index.html'));
  }
});

export default router;
