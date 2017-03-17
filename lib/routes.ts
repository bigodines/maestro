/**
 *
 */

import * as Router from 'koa-router';
import {Request} from 'koa';
import * as chalk from 'chalk';

const router = new Router();

/**
 * Base route
 */
router.get('/', async (ctx, next) => {
  ctx.body = "----8------";
  ctx.status = 200;

  await next();
});

export default router;

interface IKoaRequestWithBody extends Router.IRouterContext {
  request: IKoaBodyParserRequest;
}

interface IKoaBodyParserRequest extends Request {
  body: any;
}
