const mongoose = require('src/mongoose');

const Model = new mongoose.Schema({
    contactId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    time: {
        type: Number,
        validate: {
            validator: (v) => {
                return v > 0;
            },
            message: 'Invalid call time!'
        },
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    incoming: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('HistoryModel', Model);
