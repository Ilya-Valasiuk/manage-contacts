const express = require('express');
const router = express.Router();

const { 
    getHistoryByContactId,
    createHistoryItem,
    deleteHistoryItems
} = require('src/controller/history');

router.get('/:contactId', getHistoryByContactId);
router.post('/', createHistoryItem);
router.delete('/:contactId', deleteHistoryItems);

module.exports = router;