import { Service } from 'egg';
import { getConnection } from "typeorm";

/**
 * topics Service
 */
export default class topics extends Service {
  public async index() {
    const connection = await getConnection()
    //await connection.createQueryBuilder().insert().into('TESTTABLE').values([{NAME:"fdsafds",USERID:84651}]).execute()
    //console.log(connection.driver)
    const result =await connection.query('select * from TESTTABLE t')
    return result
  }

  public async update() {
    const connection = await getConnection()
    
    //await connection.createQueryBuilder().insert().into('TESTTABLE').values([{NAME:"fdsafds",USERID:84651}]).execute()
    //console.log(connection.driver)
    const result =await connection.query('select * from TESTTABLE t')
    return result
  }
}
