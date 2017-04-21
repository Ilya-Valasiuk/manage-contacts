const mongoose = require('mongoose');

module.exports = (config) => {
    return {
        connect: () => {
            mongoose.connect(config.mongodb.uri, (err) => {
                if (err) {
                    console.log(err);
                }
            });
        },
        disconnect: () => {}
    }
};
