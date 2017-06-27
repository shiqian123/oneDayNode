/**
 * Created by shiqian on 16/8/11.
 */
'use strict';
//import path from 'path';
var path  = require('path');
const config = {
  appId: process.env.APP_ID || 'app-service',
  masterKey: process.env.MASTER_KEY || '', // bash echo $(md5 -rs 'swiftHorseWebServer') | shasum
  isDevelopment: process.env.NODE_ENV !== 'production',
  dashboardAuth: process.env.DASHBOARD_AUTH,
  db: process.env.DATABASE_URI || 'mongodb://localhost/blog',
  // db: process.env.DATABASE_URI || 'mongodb://zhoufifo:3d8fd66a3f9bfc84f2235b146a5badb5@docker.zhoufifo.com/admin',
  env: process.env.NODE_ENV || 'development',
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 3011,
  rootPath: path.join(__dirname, '../../')
}

module.exports = config;