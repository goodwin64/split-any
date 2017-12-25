const assert = require('assert');
const splitAny = require('./src/index.js');

describe('splitAny', function() {
    it('splits strings', function() {
        assert.deepEqual(splitAny('Hello'), [ 'H', 'e', 'l', 'l', 'o' ]);
    });

    it('splits strings with spaces into nested arrays', function() {
        assert.deepEqual(splitAny('Hello world!'), [[ 'H', 'e', 'l', 'l', 'o' ], [ 'w', 'o', 'r', 'l', 'd', '!' ]]);
    });

    it('splits numbers', function() {
        assert.deepEqual(splitAny(891), [8, 9, 1]);
    });

    it('splits the return value of a callback', function() {
        assert.deepEqual(splitAny(function() { return 123; }), [1, 2, 3]);
    });

    it('splits objects into nested arrays of key/value pairs', function() {
        assert.deepEqual(splitAny({firstProp: 'a string', secondProp: 44, thirdProp: false}), [['firstProp', 'a string'], ['secondProp', 44], ['thirdProp', false]]);
    });

    it('splits each value in an array', function() {
        assert.deepEqual(splitAny([10, { test: 'test' }, function() {return 'hello';}]), [[1, 0], [['test', 'test']], ['h', 'e', 'l', 'l', 'o']]);
    });
});
