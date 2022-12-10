/*
COMP.SE.200-2022 Software testing
Unit tests for words.js
Lotta Lindell
Sami Jakonen
*/
import words from '../src/words.js';
import chai from 'chai';
const expect = chai.expect;

describe('#words()', function() {
    context('given string composed of alphanumeric characters and special characters', function() {
        it('should return an array of the words with only alphanumeric characters', function() {
            expect(words('fred, barney, & pebbles')).to.deep.equal(['fred', 'barney', 'pebbles']);
        });
    });
    context('given string composed of alphanumeric characters and special characters and a pattern for matching', function() {
        it('should return array of words that match the pattern', function() {
            expect(words('fred, barney, & pebbles', /[^, ]+/g)).to.deep.equal(['fred', 'barney', '&', 'pebbles']);
        });
    });
    context('given a string as pattern', function() {
        it('should return array of words that match the pattern', function() {
            expect(words('fred, barney, & pebbles', 'abc')).to.deep.equal([]);
        });
    });
});
