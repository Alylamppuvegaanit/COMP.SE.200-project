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
        it('should return composed aggregate object corresponding to given iteratee', function() {
            const users = [
                { 'user': 'barney', 'active': true },
                { 'user': 'betty', 'active': true },
                { 'user': 'fred', 'active': false }
            ];
            const expectedResult = { 'true': 2, 'false': 1 };
            expect(countBy(users, value => value.active)).to.deep.equal(expectedResult);
        });
        it('should return an object', function() {
            const users = [
               { 'user': 'barney', 'active': true },
               { 'user': 'betty', 'active': true },
               { 'user': 'fred', 'active': false }
            ];
            expect(countBy(users, value => value.active)).to.be.a("object");
        });
        it('should return n entities', function() {
            const users = [
               { 'user': 'barney', 'active': true },
               { 'user': 'betty', 'active': true },
               { 'user': 'fred', 'active': false }
            ];
            expect(Object.keys(countBy(users, value => value.active)).length).to.equal(2);
        });
    });
    context('given an invalid iteratee', function() {
        it('should throw an exception on invalid iteratee', function() {
            const users = [
                { 'user': 'barney', 'active': true },
                { 'user': 'betty', 'active': true },
                { 'user': 'fred', 'active': false }
            ];
            expect(countBy(users, value => value.invalid)).to.throw();
        });
    });
});
