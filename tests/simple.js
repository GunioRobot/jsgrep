var parse = require('narcissus/lib/parser').parse;

var a = 1, b = 2;
var c;

function hats(c) {
  var a = function() {
    return b;
  };

  return a();
}

a = (b = 2) || c + 1;
hats(b);

try {
  q = REFERENCEERROR;
} catch(e) {
  ' whatever';
} finally {
  delete a;
}