const HttpStatus = require('http-status-codes');
const { ObjectId } = require('mongodb');
const ContactModel = require('src/models/contactModel');
const { generateNotFoundError } = require('src/helpers/errors');

const PAGE_LIMIT = 2;
const MAX_PAGE_LIMIT = 999;

const getContact = (req, res, next) => {
    const { contactId } = req.params;

    ContactModel.findById(contactId, (err, contact) => {
        if (err) {
            next(err);
            return;
        }

        if (!contact) {
            next(generateNotFoundError(contactId));
        } else {
            res.status(HttpStatus.OK).send(contact);
        }
    });
};

const getContacts = (req, res, next) => {
    const { page } = req.params;
    const limit = page ? PAGE_LIMIT : MAX_PAGE_LIMIT;
    const skip = page ? page * PAGE_LIMIT : 0;
    
    ContactModel
        .find({})
        .limit(limit)
        .skip(skip)
        .exec((err, contacts) => {
            if (err) {
                next(err);
            } else {
                res.status(HttpStatus.OK).json(contacts);
            }
        });
};

const createContact = (req, res, next) => {
    const newConctact = new ContactModel(req.body);

    newConctact.save((err, contact) => {
        if (err) {
            next(err);
        } else {
            res.status(HttpStatus.OK).send(contact);
        }
    });
};

const updateContact = (req, res, next) => {
    const { contactId } = req.params;

    ContactModel.findOneAndUpdate({ _id: contactId }, req.body, { new: true, runValidators: true }, (err, contact) => {
        if (err) {
            next(err);
            return;
        }

        if (!contact) {
            next(generateNotFoundError(contactId));
        } else {
            res.status(HttpStatus.OK).send(contact);
        }
    });
};

const deleteContact = (req, res, next) => {
    const { contactId } = req.params;

    ContactModel.findOneAndRemove({ _id: new ObjectId(contactId) }, (err, contact) => {
        if (err) {
            next(err);
            return;
        }

        if (!contact) {
            next(generateNotFoundError(contactId));
        } else {
            res.status(HttpStatus.OK).send('Contact removed.');

            // const options = {
            //     url: 'url to remove contact',
            //     method: 'delete'
            // };
            // request(options);
        }
    });
};

module.exports = {
    getContact,
    getContacts,
    createContact,
    updateContact,
    deleteContact
};
