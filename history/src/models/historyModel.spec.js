const expect = require('chai').expect;

const proxyquire = require('proxyquire').noCallThru();

const mongoose = require('mongoose');

const HistoryModel = proxyquire('./historyModel', {
    'src/mongoose': mongoose
});

describe('HistoryModel', function() {
    it('should be invalid if contactId is empty', (done) => {
        const item = new HistoryModel();
 
        item.validate((err) => {
            expect(err.errors.contactId).to.exist;
            done();
        });
    });

    it('should be invalid if time is empty', (done) => {
        const item = new HistoryModel({
            contactId: 123123123123
        });
 
        item.validate((err) => {
            expect(err.errors.time).to.exist;
            done();
        });
    });

    it('should be invalid if time = 0', (done) => {
        const item = new HistoryModel({
            contactId: 123123123123,
            time: 0
        });
 
        item.validate((err) => {
            expect(err.errors.time).to.exist;
            done();
        });
    });

    it('should be invalid if time < 0', (done) => {
        const item = new HistoryModel({
            contactId: 123123123123,
            time: -1
        });
 
        item.validate((err) => {
            expect(err.errors.time).to.exist;
            done();
        });
    });

    it('should be valid if all data pass', (done) => {
        const item = new HistoryModel({
            contactId: 123123123123,
            time: 2
        });
 
        item.validate((err) => {
            expect(err).to.be.null;
            done();
        });
    });
});