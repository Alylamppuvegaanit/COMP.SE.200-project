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
        it('should return a string', function() {
            expect(capitalize('VEGAN PIZZA')).to.be.a('string');
        });
        it('should return capitalized word', function() {
            expect(capitalize('VEGAN PIZZA')).to.equal('Vegan pizza');
        });
    });
    context('given an lowercase word', function() {
        it('should return capitalized word', function() {
            expect(capitalize('vegan pizza')).to.equal('Vegan pizza');
        });
    });
    context('given a string with special characters', function() {
        it('should return the capitalized string with special characters', function() {
            expect(capitalize('wing sauce 1kg/35oz')).to.equal('Wing sauce 1kg/35oz');
        });
    });
    context('given an empty string', function() {
        it('should return an empty string', function() {
            expect(capitalize('')).to.equal('');
        });
    });
    context('given a numeric string input', function() {
        it('should return the number stringified', function() {
            expect(capitalize('101')).to.equal('101');
        });
    });
});
