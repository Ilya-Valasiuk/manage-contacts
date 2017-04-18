const expect = require('chai').expect;

const proxyquire = require('proxyquire').noCallThru();

const modelStub = {
    findById: () => {}
};

const historyController = proxyquire('./history', {
    'src/models/historyModel': modelStub
});

describe('History controller', () => {
    it('should provide API', () => {
        expect(historyController.getHistoryByContactId).to.exist;
        expect(historyController.createHistoryItem).to.exist;
        expect(historyController.deleteHistoryItems).to.exist;
    });
});
