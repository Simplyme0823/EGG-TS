import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';


export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1586571986454_9848';

  // add your egg config in here
  config.middleware = ['auth'];

  config.security = {
    csrf: {
      enable: false
    },
    domainWhiteList: ['*']
  }

  //解决跨域问题
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  }

  //websoket
  config.io = {
    init: {}, // passed to engine.io
    namespace: {
      '/machineStatus': {
        connectionMiddleware: ['auth'],
        packetMiddleware: [],
      }
    },
    redis: {
      host: '127.0.0.1',
      port: 6379,
    },
  };

  config.redis = {
    client:{
      host: '127.0.0.1',
      port: 6379,
      password:'123456',
      db: 0,
    }

  }

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };


  // the return config will combines to EggAppConfig
  return {
    ...config as {},
    ...bizConfig,
  };
};
