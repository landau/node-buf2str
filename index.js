'use strict';

// Converts a buffer to a string
// if `buf` is not a buffer it will turn it into one
// so it better be something Buffer likes.
var api = module.exports = function buf2str(buf, encoding) {
  encoding = encoding || api.defaultEncoding;

  if (!Buffer.isBuffer(buf)) {
    buf = new Buffer(buf, encoding);
  }
  return buf.toString();
};

api.defaultEncoding = 'base64';
