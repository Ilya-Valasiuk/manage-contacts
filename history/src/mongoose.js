const config = require('config/config');
const mongoose = require('mongoose');

mongoose.connect(config.mongodb.uri);

module.exports = mongoose;
