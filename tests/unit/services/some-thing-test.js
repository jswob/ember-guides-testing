import { module, test } from "qunit";
import { setupTest } from "ember-qunit";

module("Unit | Service | some-thing", function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test("metodToTest returns correct string", function(assert) {
    let service = this.owner.lookup("service:some-thing");

    // stubb metod
    service.someComplexMetod = function() {
      return 4;
    };

    assert.equal(service.metodToTest(2), "Doubled: 4", "testMethod is working");
  });
});
