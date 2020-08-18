const assert = require('assert');
const app = require('../../src/app');

describe('\'authentication-display-users\' service', () => {
  it('registered the service', () => {
    const service = app.service('authentication-display-users');

    assert.ok(service, 'Registered the service');
  });
});
