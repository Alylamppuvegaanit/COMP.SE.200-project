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
            expect(eq("aaa", "aaa")).to.equal(true);
        });
    });
    context('given two different strings', function() {
        it('should return false', function() {
            expect(eq("aaa", "bbb")).to.equal(false);
        });
    });
});
