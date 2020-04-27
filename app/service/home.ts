import { Service } from 'egg';

export default class home extends Service {
  public async index() {
    return `<h1>Have a nice day!</h1>`
  }
}
