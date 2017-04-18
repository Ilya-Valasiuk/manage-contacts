const HttpStatus = require('http-status-codes');
const HistoryModel = require('src/models/historyModel');

const getHistoryByContactId = (req, res, next) => {
    const { contactId } = req.params;

    HistoryModel.find({ contactId }, (err, history) => {
        if (err) {
            next(err);
        } else {
            res.status(HttpStatus.OK).send(history);
        }
    });
};

const createHistoryItem = (req, res, next) => {
    const newHistoryItem = new HistoryModel(req.body);

    newHistoryItem.save((err, historyItem) => {
        if (err) {
            next(err);
        } else {
            res.status(HttpStatus.OK).send(historyItem);
        }
    });
};

const deleteHistoryItems = (req, res, next) => {
    const { contactId } = req.params;

    HistoryModel.find({ contactId }).remove((err) => {
        if (err) {
            next(err)
        } else {
            res.status(HttpStatus.OK).send(`History for ${contactId} was removed.`);
        }
    });
};

module.exports = {
    getHistoryByContactId,
    createHistoryItem,
    deleteHistoryItems
};
