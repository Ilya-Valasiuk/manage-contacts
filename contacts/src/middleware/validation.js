const { ObjectId } = require('mongodb');
const { generateInvalidIdError } = require('src/helpers/errors');

function validateId(id) {
    return ObjectId.isValid(id);
}

const contactIdValidation = (req, res, next) => {
    const { contactId } = req.params;

    validateId(contactId) ? next() : next(generateInvalidIdError(contactId));
};

module.exports = {
    contactIdValidation
};
