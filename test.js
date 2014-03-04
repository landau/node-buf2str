'use strict';

var assert = require('assert');
var is = require('is-predicate');
var buf2str = require('./');

describe('buf2str', function() {
  it('should have a default encoding of base64', function() {
    assert(is.equal(buf2str.defaultEncoding, 'base64'));
  });

  it('should convert a buffer to a string', function() {
    var b = new Buffer('foobar');
    assert(is.equal(buf2str(b), 'foobar'));
  });

  it('should convert a buffer accepted value to a string', function() {
    assert(is.equal('foobar', 'foobar'));
  });
});
