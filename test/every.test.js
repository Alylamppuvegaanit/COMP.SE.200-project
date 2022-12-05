/*
COMP.SE.200-2022 Software testing
Unit tests for every.js
Lotta Lindell
Sami Jakonen
*/
import every from '../src/every.js';
import chai from 'chai';
const expect = chai.expect;

describe('#every()', function() {
    context('given an array and iterating it over a predicate (Boolean)', function() {
        it('should return true if all elements pass predicate check', function() {
            expect(every([true, 1, null, 'yes'], Boolean)).to.equal(false);
        });
    });
});
