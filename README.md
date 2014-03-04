[![Build Status](https://travis-ci.org/landau/node-buf2str.png)](https://travis-ci.org/landau/node-buf2str)

buf2str
============

Convert a buffer (or buffer accepted value) to a string.

## Install

`npm i -S buf2str`

## Usage

```javascript
var buf2str = require('buf2str');

var base64 = 'VGhlIGxhenkgZm94IHJhbiBkb3duIHNvbWV0aGluZy4uLkkgY2FuJ3QgcmVtZW1iZXIu';
var expected = 'The lazy fox ran down something...I can\'t remember.';

// Default base64
buf2str(base64) === expected; // true
```
