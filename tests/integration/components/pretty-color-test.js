import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | pretty-color", function(hooks) {
  setupRenderingTest(hooks);

  test("should change colors", async function(assert) {
    assert.expect(1);

    // set the outer contect to red
    this.set("colorValue", "red");

    await render(hbs`<PrettyColor @name={{this.colorValue}} />`);

    assert.equal(
      this.element.querySelector("div").getAttribute("style"),
      "color: red",
      "starts as red"
    );

    this.set("colorValue", "orange");

    assert.equal(
      this.element.querySelector("div").getAttribute("style"),
      "color: green",
      "text switches to green"
    );
  });
});
