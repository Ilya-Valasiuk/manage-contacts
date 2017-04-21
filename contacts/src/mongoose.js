const config = require('config/config');
const mongoose = require('mongoose');

mongoose.connect(config.mongodb.uri, (err) => {
    console.log(err);
});

module.exports = mongoose;
