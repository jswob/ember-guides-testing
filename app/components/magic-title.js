import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class MagicTitleComponent extends Component {
  @tracked title = "Hello World";

  @action
  updateTitle() {
    this.title = "This is Magic";
  }
}
