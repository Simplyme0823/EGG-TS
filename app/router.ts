import { Application } from 'egg';

import { createConnection } from "typeorm";
//const open = require('open');
export default (app: Application) => {
  //数据库建立连接
  createConnection({
    "type": "oracle",
    "host": "192.168.123.36",
    "port": 1521,
    "username": "scott",
    "password": "tiger",
    "sid": "orcl",
    entities: [
      "G:/node/Egg-TS/entity/*.ts"
    ], synchronize: true,
  }).then(() => {
    console.log(__dirname)
    const { controller, router, io } = app;
    router.get('/', controller.home.index)
    router.get('/email', controller.email.index)
    router.resources("topics", "/api/topics", controller.topics);
    //console.log(io.controller.machineStatus.test)
    io.of('/machineStatus').route('cmachineStatus', io.controller.machineStatus.test)
  })
};



