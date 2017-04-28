import { module, test } from 'qunit';
import Cookies from 'ember-cli-js-cookie';

module('Unit | Utility | library');

// Replace this with your real tests.
test('is loaded', function(assert) {
  const name = 'test';
  const value = 'working!';
  Cookies.set(name, value);

  const result = Cookies.get(name);
  assert.equal(result, value, 'cookie was set');
});
