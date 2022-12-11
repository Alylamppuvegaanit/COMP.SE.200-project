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
            expect(drop([1, 2, 3])).to.deep.equal([2, 3]);
        });
    });
    context('given an array and using 2 as number to slice the array', function() {
        it('should return the array with first two elements removed', function() {
            expect(drop(['Ramen', 'Hillomunkki', 'Aioli'], 2)).to.deep.equal(['Aioli']);
        });
    });
    context('given an array and a slice number that is bigger than the length of the array', function() {
        it('should return an empty array', function() {
            expect(drop([1, 2, 3], 5)).to.deep.equal([]);
        });
    });
    context('given an empty array and a slice number 1', function() {
        it('should return en empty array', function() {
            expect(drop([], 1)).to.deep.equal([]);
        });
    });
    context('given a null array and a slice number 1', function() {
        it('should return an empty array', function() {
            expect(drop(null, 1)).to.deep.equal([]);
        });
    });
    context('given some array and a negative slice number', function() {
        it('should return the original array', function() {
            expect(drop([1, 2, 3], -1)).to.deep.equal([1, 2, 3]);
        });
    });
    context('given some array and slice number zero', function() {
        it('should return the original array', function() {
            expect(drop([1, 2, 3], 0)).to.deep.equal([1, 2, 3]);
        });
    });
});
