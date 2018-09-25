/*! modulo_first v0.0.0 - MIT license */
'use strict';

var modulo_first = function (i) {
  // your code goes here

  var n = 4
  var answer = i%n;
  return answer;
}

if ( typeof module !== "undefined" ) {
  module.exports = modulo_first;
}
