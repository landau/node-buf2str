'use strict';

var assert = require('assert');
var is = require('is-predicate');
var buf2str = require('./');

var base64 = 'VGhlIGxhenkgZm94IHJhbiBkb3duIHNvbWV0aGluZy4uLkkgY2FuJ3QgcmVtZW1iZXIu';
var expected = 'The lazy fox ran down something...I can\'t remember.';

describe('buf2str', function() {
  it('should have a default encoding of base64', function() {
    assert(is.equal(buf2str.defaultEncoding, 'base64'));
  });

  it('should convert a buffer to a string', function() {
    var b = new Buffer(base64, 'base64');
    assert(is.equal(buf2str(b), expected));
  });

  it('should convert a buffer accepted value to a string', function() {
    assert(is.equal(buf2str(base64), expected));
  });
});
