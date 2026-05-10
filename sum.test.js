const test = require('node:test');
const assert = require('node:assert');
const sum = require('./sum');

test('prawidlowe dodawanie', () => {
  assert.strictEqual(sum(6, 7), 13);
});