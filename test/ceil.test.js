/*
COMP.SE.200-2022 Software testing
Unit tests for ceil.js
Lotta Lindell
Sami Jakonen
*/
import ceil from '../src/ceil.js';
import chai from 'chai';
const expect = chai.expect;

describe('#ceil()', function() {
    context('given a single float argument', function() {
        it('should return the given value rounded up to the nearest integer', function() {
            expect(ceil(6.087)).to.equal(7);
        });
    });
});
