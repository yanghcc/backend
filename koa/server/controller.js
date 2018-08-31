const request = require('superagent');
class indexController {
  static async goods(ctx, next) {
    var res = await request.get('https://cnodejs.org/api/v1/topics');
    if (res && res.ok && res.body.success) {
      ctx.body = res.body;
    }
  }
}
module.exports = indexController;