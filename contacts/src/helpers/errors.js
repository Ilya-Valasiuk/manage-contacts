const HttpStatus = require('http-status-codes');

module.exports = {
    generateInvalidIdError: (id) => {
        const err = new Error(`Invalid contact ID - ${id}.`);
        err.status = HttpStatus.BAD_REQUEST;
        return err;
    },

    generateNotFoundError: (id) => {
        const err = new Error(`Contact ${id} not found.`);
        err.status = HttpStatus.NOT_FOUND;
        return err;
    } 
};
