/*
COMP.SE.200-2022 Software testing
Unit tests for filter.js
Lotta Lindell
Sami Jakonen
*/
import filter from '../src/filter.js';
import chai from 'chai';
const expect = chai.expect;

describe('#filter()', function() {
    context('given an array to iterate over each element thru given predicate', function() {
        it('should return all objects the predicate returns truthy for', function() {
            const users = [
                { 'user': 'barney', 'active': true },
                { 'user': 'fred',   'active': false }
            ];
            const expectedResult = [{ 'user': 'barney', 'active': true }];
            expect(filter(users, ({ active }) => active)).to.equal(expectedResult);
        });
        it('should return an array', function() {
            const users = [
                { 'user': 'barney', 'active': true },
                { 'user': 'fred',   'active': false }
            ];
            expect(filter(users, ({ active }) => active)).to.be.a('array');
        });
    });
    context('given a null instead of an array', function() {
        it('should return an empty nested array', function() {
            expect(filter(null, ({ active }) => active)).to.equal([[]]);
        });
    });
});
