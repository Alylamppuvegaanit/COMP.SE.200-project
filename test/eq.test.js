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
            expect(eq('Kebab', 'Kebab')).to.equal(true);
        });
    });
    context('given two different strings', function() {
        it('should return false', function() {
            expect(eq('Nakki', 'Muusi')).to.equal(false);
        });
    });
    context('given two similar decimals', function() {
        it('should return true', function() {
            expect(eq(56.75, 56.75)).to.equal(true);
        });
    });
    context('given two different decimals', function() {
        it('should return false', function() {
            expect(eq(18.30, 18.4)).to.equal(false);
        });
    });
    context('given two different objects with same values', function() {
        it('should return false', function() {
            expect(eq({"amount": {"Mutakakku" : 2}}, {"amount": {"Mutakakku" : 2}})).to.deep.equal(false);
        });
    });
    context('given the same object twice', function() {
        const meat = {"amount": {"Villisorsa" : 2}};
        it('should return true', function() {
            expect(eq(meat, meat)).to.deep.equal(true);
        });
    });
    context('given two arrays with same values', function() {
        it('should return false', function() {
            expect(eq([1, 2], [1, 2])).to.deep.equal(false);
        });
    });
    context('given two arrays with same values in different order', function() {
        it('should return false', function() {
            expect(eq([1, 2], [2, 1])).to.deep.equal(false);
        });
    });
    context('given two Nans', function() {
        it('should return true', function() {
            expect(eq(NaN, NaN)).to.equal(true);
        });
    });
    context('given two similar functions', function() {
        function createComplaint(msg) { return msg; }
        it('should return true', function() {
            expect(eq(createComplaint, createComplaint)).to.equal(true);
        });
    });
});
