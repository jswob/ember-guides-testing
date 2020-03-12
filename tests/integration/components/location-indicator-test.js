import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import Service from "@ember/service";

//Stub location service
const locationStub = Service.extend({
  city: "New York",
  country: "USA",
  currentLocation: {
    x: 1234,
    y: 5678
  },

  getCurrentCity() {
    return this.city;
  },
  getCurrentCountry() {
    return this.country;
  }
});

module("Integration | Component | location-indicator", function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function(assert) {
    this.owner.register("service:location", locationStub);
  });

  test("should reveal current location", async function(assert) {
    await render(hbs`<LocationIndicator />`);
    assert.equal(
      this.element.textContent.trim(),
      "You currently are located in New York, USA"
    );
  });
});
