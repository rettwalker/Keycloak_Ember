import { moduleFor, test } from 'ember-qunit';
import sinon from 'sinon';

moduleFor('controller:application', 'Unit | Controller | application', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});

test('goToRoute', function(assert) {
  let controller = this.subject();
  let stub = sinon.stub(controller, 'transitionToRoute');

  controller.send('goToRoute','books');

  assert.ok(stub.calledOnce, 'Moved To New Route');
  assert.ok(stub.calledWith('books'), 'Moved To Books');
});

test('goToRoute ', function(assert) {
  let controller = this.subject();
  let stub = sinon.stub(controller, 'transitionToRoute');

  controller.send('goToRoute','index');

  assert.ok(stub.calledOnce, 'Moved To New Route');
  assert.ok(stub.calledWith('index'), 'Moved To Books');
});
