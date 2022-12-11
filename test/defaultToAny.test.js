/*
COMP.SE.200-2022 Software testing
Unit tests for defaultToAny.js
Lotta Lindell
Sami Jakonen
*/
import defaultToAny from '../src/defaultToAny.js';
import chai from 'chai';
const expect = chai.expect;

describe('#defaultToAny()', function() {
    context('given multiple valid values', function() {
        it('should return the first value', function() {
            expect(defaultToAny(1, 10, 20)).to.equal(1);
        });
    });
    context('given multiple valid values with the first value being undefined', function() {
        it('should return the second value', function() {
            expect(defaultToAny(undefined, 10, 20)).to.equal(10);
        });
    });
    context('given multiple invalid values', function() {
        it('should return the last', function() {
            expect(defaultToAny(undefined, null, NaN)).to.deep.equal(NaN);
        });
    });
    context('given multiple falsy values with the first value being valid', function() {
        it('should return the first one', function() {
            expect(defaultToAny('Texas Pete', null, undefined)).to.equal('Texas Pete');
        });
    });
});
