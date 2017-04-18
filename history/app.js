const express = require('express');
const app = express();

require('app-module-path').addPath(__dirname);

const env = require('node-env-file');
env(__dirname + '/.env');
const config = require('config/config')

require('./src/router')(app);
require('./src/run')(app, config);
