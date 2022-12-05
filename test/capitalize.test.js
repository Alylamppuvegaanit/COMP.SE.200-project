/*
COMP.SE.200-2022 Software testing
Unit tests for capitalize.js
Lotta Lindell
Sami Jakonen
*/
import capitalize from '../src/capitalize.js';
import chai from 'chai';
const expect = chai.expect;

describe('#capitalize()', function() {
    context('given an uppercase word', function() {
        it('should return capitalized word', function() {
            expect(capitalize('FRED')).to.equal('Fred');
        });
    });
    context('given an lowercase word', function() {
        it('should return capitalized word', function() {
            expect(capitalize('fred')).to.equal('Fred');
        });
    });
});
