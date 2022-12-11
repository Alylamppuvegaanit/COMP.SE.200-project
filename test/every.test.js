/*
COMP.SE.200-2022 Software testing
Unit tests for every.js
Lotta Lindell
Sami Jakonen
*/
import every from '../src/every.js';
import chai from 'chai';
const expect = chai.expect;

function filterByPrice(price) {
    if (price < 5) {
        return true;
    }
    return false;
}

describe('#every()', function() {
    context('given an array and iterating it over a predicate (Boolean)', function() {
        it('should return true if all elements pass predicate check', function() {
            expect(every([true, 1, null, 'yes'], Boolean)).to.equal(false);
        });
    });
    context('given a price array and iterating it over a predicate filter function', function() {
        it('should return true if all elements pass predicate check', function() {
            expect(every([1.99, 3, 1, 0], filterByPrice)).to.equal(true);
        });
    });
    context('given a null array', function() {
        it('should return true', function() {
            expect(every(null, Boolean)).to.equal(true);
        });
    });
});
