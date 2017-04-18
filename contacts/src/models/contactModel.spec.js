const expect = require('chai').expect;

const proxyquire = require('proxyquire').noCallThru();

const mongoose = require('mongoose');

const ContacModel = proxyquire('./contactModel', {
    'src/mongoose': mongoose
});

describe('ContacModel', function() {
    it('should be invalid if name is empty', (done) => {
        const item = new ContacModel({
            phoneNumber: '+3752966666666'
        });
 
        item.validate((err) => {
            expect(err.errors.name).to.exist;
            done();
        });
    });

    it('should be invalid if phoneNumber is empty', (done) => {
        const item = new ContacModel({
            name: 'Bill'
        });
 
        item.validate((err) => {
            expect(err.errors.phoneNumber).to.exist;
            done();
        });
    });

    it('should be invalid if phoneNumber is not match regexp', (done) => {
        const item = new ContacModel({
            name: 'Bill',
            phoneNumber: '+234'
        });
 
        item.validate((err) => {
            expect(err.errors.phoneNumber).to.exist;
            done();
        });
    });

    it('should be invalid if phoneNumber is not match regexp', (done) => {
        const item = new ContacModel({
            name: 'Bill',
            phoneNumber: '+'
        });
 
        item.validate((err) => {
            expect(err.errors.phoneNumber).to.exist;
            done();
        });
    });

    it('should be invalid if phoneNumber is not match regexp', (done) => {
        const item = new ContacModel({
            name: 'Bill',
            phoneNumber: '+123sdf12312'
        });
 
        item.validate((err) => {
            expect(err.errors.phoneNumber).to.exist;
            done();
        });
    });

    it('should be valid if all data valid', (done) => {
        const item = new ContacModel({
            name: 'Bill',
            phoneNumber: '+3752966666666'
        });
 
        item.validate((err) => {
            expect(err).to.be.null;
            done();
        });
    });
});