const mongoose = require('mongoose');

const Model = new mongoose.Schema({
    name: { type: String, required: true },
    surName: String,
    Company: String,
    phoneNumber: {
        type: String,
        validate: {
            validator: (v) => {
                return /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(v);
            },
            message: 'Invalid phone number!'
        },
        required: [true, 'Contact phone number required']
    }
});

module.exports = mongoose.model('Contact', Model);
