/*
COMP.SE.200-2022 Software testing
Unit tests for drop.js
Lotta Lindell
Sami Jakonen
*/
import drop from '../src/drop.js';
import chai from 'chai';
const expect = chai.expect;

describe('#drop()', function() {
    context('given an array and using default param to slice the array', function() {
        it('should return the array with first element removed', function() {
            expect(drop([1, 2, 3])).to.equal([2, 3]);
        });
    });
    context('given an array and using 3 as number to slice the array', function() {
        it('should return the array with first two elements removed', function() {
            expect(drop([1, 2, 3], 2)).to.equal([3]);
        });
    });
    context('given an array and a slice number that is bigger than the length of the array', function() {
        it('should return the array with first two elements removed', function() {
            expect(drop([1, 2, 3], 5)).to.equal([]);
        });
    });
    context('given an empty array and a slice number 1', function() {
        it('should return the array with first two elements removed', function() {
            expect(drop([], 1)).to.equal([]);
        });
    });
    context('given a null array and a slice number 1', function() {
        it('should return the array with first two elements removed', function() {
            expect(drop(null, 1)).to.equal([]);
        });
    });
});
