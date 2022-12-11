/*
COMP.SE.200-2022 Software testing
Unit tests for filter.js
Lotta Lindell
Sami Jakonen
*/
import filter from '../src/filter.js';
import chai from 'chai';
const expect = chai.expect;

function filterByPrice(price) {
    if (price < 5) {
        return true;
    }
    return false;
}

describe('#filter()', function() {
    context('given an array to iterate over each element through given predicate', function() {
        it('should return all objects the predicate returns truthy for', function() {
            const stores = [
                { 'store': 'Tmi Tuija Tuottaja', 'active': true },
                { 'store': 'Pirjon Burger',   'active': false }
            ];
            const expectedResult = [{ 'store': 'Tmi Tuija Tuottaja', 'active': true }];
            expect(filter(stores, ({ active }) => active)).to.deep.equal(expectedResult);
        });
        it('should return an array', function() {
            const customers = [
                { 'user': 'Heikki Kauppamäki', 'email_activated': true },
                { 'user': 'Mirjami Lehtonen',   'email_activated': false }
            ];
            expect(filter(customers, ({ active }) => active)).to.be.a('array');
        });
    });
    context('given a price array and iterating it over a predicate filter function', function() {
        it('should return items that pass predicate check', function() {
            expect(filter([1.99, 8.99, 420, 0], filterByPrice)).to.deep.equal([1.99, 0]);
        });
    });
    context('given a null array', function() {
        it('should return an empty nested array', function() {
            expect(filter(null, ({ active }) => active)).to.deep.equal([[]]);
        });
    });
});
