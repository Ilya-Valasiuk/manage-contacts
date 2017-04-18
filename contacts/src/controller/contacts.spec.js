const expect = require('chai').expect;

const proxyquire = require('proxyquire').noCallThru();
const sinon = require('sinon');
const helpersStub = { generateNotFoundError: () => {}};
const contactModelStub = {
    findById: () => {}
};

const contactController = proxyquire('./contacts', {
    'src/models/contactModel': contactModelStub,
    'src/helpers/errors': helpersStub
});

describe('Contact controller', () => {
    it('should provide API', () => {
        expect(contactController.getContact).to.exist;
        expect(contactController.createContact).to.exist;
        expect(contactController.getContacts).to.exist;
        expect(contactController.updateContact).to.exist;
        expect(contactController.deleteContact).to.exist;
    });

    describe('getContact method', () => {
        it('should call findById method on model with proper ID', () => {
            const id = 1001;
            sinon.spy(contactModelStub, 'findById');
            contactController.getContact({ params: { contactId: id } })
            
            expect(contactModelStub.findById.calledWith(id)).to.be.true;
            contactModelStub.findById.restore();
        });
    });
});
