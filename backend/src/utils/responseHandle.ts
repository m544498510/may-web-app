import {Context} from "koa";

export function errorResponseHandle(ctx:Context, e: Error){
  ctx.body = e;
  ctx.status = 400;
}
