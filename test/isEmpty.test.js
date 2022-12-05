/*
COMP.SE.200-2022 Software testing
Unit tests for isEmpty.js
Lotta Lindell
Sami Jakonen
*/
import isEmpty from '../src/isEmpty.js';
import chai from 'chai';
const expect = chai.expect;

describe('#isEmpty()', function() {
    context('given an empty object', function() {
        it('should return true', function() {
            expect(isEmpty({})).to.equal(true);
        });
    });
    context('given an unempty object', function() {
        it('should return false', function() {
            expect(isEmpty({"amount": {"apple" : 2}})).to.equal(false);
        });
    });
    context('given an unempty array', function() {
        it('should return false', function() {
            expect(isEmpty([1, 2, 3])).to.equal(false);
        });
    });
    context('given a string', function() {
        it('should return false', function() {
            expect(isEmpty('aaa')).to.equal(false);
        });
    });
    context('given a null', function() {
        it('should return true', function() {
            expect(isEmpty(null)).to.equal(true);
        });
    });
    context('given an unempty set', function() {
        it('should return false', function() {
            const testSet = new Set(["a","b","c"]);
            expect(isEmpty(testSet)).to.equal(false);
        });
    });
});
