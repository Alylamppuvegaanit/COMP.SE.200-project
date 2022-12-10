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
    context('given a string with special characters', function() {
        it('should return the capitalized string with special characters', function() {
            expect(capitalize('th1S !s @ Str1ng')).to.equal('Th1s !s @ str1ng');
        });
    });
    context('given undefined', function() {
        it('should throw exception on wrong type', function() {
            expect(capitalize(undefined)).to.throw();
        });
    });
});
