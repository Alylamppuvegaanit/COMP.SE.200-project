/*
COMP.SE.200-2022 Software testing
Unit tests for ceil.js
Lotta Lindell
Sami Jakonen
*/
import ceil from '../src/ceil.js';
import chai from 'chai';
const expect = chai.expect;

describe('#ceil()', function() {
    context('given a single float argument', function() {
        it('should return an integer', function() {
            expect(ceil(2.50)).to.be.a('number');
        });
        it('should return the given value rounded up to the nearest integer', function() {
            expect(ceil(12.99)).to.equal(13);
        });
    });
    context('given a float argument and a precision', function() {
        it('should return the rounded number as a float', function() {
            expect(ceil(1.84983, 2)).to.equal(1.85);
        });
    });
    context('given a negative float argument and a precision', function() {
        it('should return the rounded number as a float', function() {
            expect(ceil(-5.565, 2)).to.equal(-5.56);
        });
    });
    context('given a zero', function() {
        it('should return zero', function() {
            expect(ceil(0)).to.equal(0);
        });
    });
    context('given a negative integer', function() {
        it('should return the same integer', function() {
            expect(ceil(-3)).to.equal(-3);
        });
    });
    context('given a positive integer', function() {
        it('should return the same integer', function() {
            expect(ceil(3)).to.equal(3);
        });
    });
    context('given a long float value and a precision', function() {
        it('should return the rounded number as a float', function() {
            expect(ceil(1.000000000000000000004, 2)).to.equal(1.00);
        });
    });
    context('given a zero precision on a float argument', function() {
        it('should return the given value rounded up to the nearest integer', function() {
            expect(ceil(5.681, 0)).to.equal(6);
        });
    });
    context('given an undefined value', function() {
        it('should return NaN', function() {
            expect(ceil(undefined)).to.deep.equal(NaN);
        });
    });
});
