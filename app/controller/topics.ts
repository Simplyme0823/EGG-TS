import { Controller } from 'egg';

export default class topicsController extends Controller {
  async index() {
    const { ctx } = this;
    const result = await ctx.service.topics.index();
    ctx.body = JSON.stringify(result)
  }

  public async update() {
    const { ctx } = this;
    const result = await ctx.service.topics.index();
    ctx.body = JSON.stringify(result)
  }
}
