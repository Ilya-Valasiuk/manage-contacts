const express = require('express');
const router = express.Router();

const { 
    getContact,
    getContacts,
    createContact,
    updateContact,
    deleteContact
} = require('src/controller/contacts');

const { contactIdValidation } = require('src/middleware/validation');

router.get(['/', '/page/:page'], getContacts);
router.post('/', createContact);

router.get('/:contactId', [contactIdValidation, getContact]);
router.put('/:contactId', [contactIdValidation, updateContact]);
router.delete('/:contactId', [contactIdValidation, deleteContact]);

module.exports = router;