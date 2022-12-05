/*
COMP.SE.200-2022 Software testing
Unit tests for eq.js
Lotta Lindell
Sami Jakonen
*/
import eq from '../src/eq.js';
import chai from 'chai';
const expect = chai.expect;

describe('#eq()', function() {
    context('given two similar strings', function() {
        it('should return true', function() {
            expect(eq("aaa", "aaa")).to.equal(true);
        });
    });
    context('given two different strings', function() {
        it('should return false', function() {
            expect(eq("aaa", "bbb")).to.equal(false);
        });
    });

    context('given two similar decimals', function() {
        it('should return true', function() {
            expect(eq("56.75", "56.75")).to.equal(true);
        });
    });
    context('given two different decimals', function() {
        it('should return false', function() {
            expect(eq("18.30", "18.3")).to.equal(false);
        });
    });
    context('given two objects with differing value', function() {
        it('should return false', function() {
            expect(eq({"amount": {"apple" : 2}}, {"amount": {"apple" : 3}})).to.equal(false);
        });
    });
    context('given two Nans', function() {
        it('should return true', function() {
            expect(eq(NaN, NaN)).to.equal(true);
        });
    });
});
