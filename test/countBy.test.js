/*
COMP.SE.200-2022 Software testing
Unit tests for countBy.js
Lotta Lindell
Sami Jakonen
*/
import countBy from '../src/countBy.js';
import chai from 'chai';
const expect = chai.expect;

describe('#countBy()', function() {
    context('given a collection to iterate over each element thru given iteratee', function() {
        const products = [
            { 'product': 'Pizza', 'available': true },
            { 'product': 'Wings', 'available': true },
            { 'product': 'Burger', 'available': false }
        ];
        it('should return composed aggregate object corresponding to given iteratee', function() {
            const expectedResult = { 'true': 2, 'false': 1 };
            expect(countBy(products, value => value.available)).to.deep.equal(expectedResult);
        });
        it('should return an object', function() {
            expect(countBy(products, value => value.available)).to.be.a('object');
        });
        it('should return n entities', function() {
            expect(Object.keys(countBy(products, value => value.available)).length).to.equal(2);
        });
    });
    context('given an non-matching iteratee', function() {
        const products = [
            { 'product': 'Pizza', 'available': true },
            { 'product': 'Wings', 'available': true },
            { 'product': 'Burger', 'available': false }
        ];
        it('should return an object with iteratee value of zero', function() {
            const expectedResult = { 'invalid': 0 };
            expect(countBy(products, value => value.invalid)).to.deep.equal(expectedResult);
        });
    });
    context('given an empty array and truthy iteratee', function() {
        const products = [];
        it('should return en empty object', function() {
            expect(countBy(products, () => { return true; })).to.deep.equal({});
        });
    });
});
