[![Build Status](https://travis-ci.org/landau/node-buf2str.png)](https://travis-ci.org/landau/node-buf2str)

buf2str
============

Convert a buffer (or buffer accepted value) to a string.

## Install

`npm i -S buf2str`

## usage

```javascript
var buf2str = require('buf2str');

buf2str('foobar'); // foobar
buf2str(new Buffer('foobar')); // foobar
```
