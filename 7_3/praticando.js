const assert = require('assert');

function sum(num1, num2) {
  return num1 + num2;
}

const expected = sum(2, 5);

assert(expected === 7, 'valor errado');
assert.ok(expected === 7, 'ok. valor errado');
assert.equal(expected, 7, 'equal, valor errado');
assert.notEqual(expected, 7, `notEqual, esperava 7, mas retornou outo numero`);