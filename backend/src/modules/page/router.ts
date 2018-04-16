import {createReadStream} from 'fs';
import * as path from 'path';
import * as Router from 'koa-router';

const publicPath = path.resolve(__dirname,'../../../public');
const router = new Router();

router.get('/', ctx=>{
  ctx.response.type = 'html';
  ctx.response.body = createReadStream(path.resolve(publicPath,'./index.html'));
});

export default router;
