import { moduleFor, test } from 'ember-qunit';
//import sinon from 'sinon';

moduleFor('route:application', 'Unit | Route | application', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
  needs:['service:keycloak-session']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
