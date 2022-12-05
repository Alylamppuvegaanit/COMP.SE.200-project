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
        it('should return the given value rounded up to the nearest integer', function() {
            expect(ceil(6.087)).to.equal(7);
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
    context('given a negative decimal', function() {
        it('should return the given value rounded up to the nearest integer', function() {
            expect(ceil(-5.565)).to.equal(-5);
        });
    });
});
