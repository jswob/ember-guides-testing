import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
export default class LocationIndicatorComponent extends Component {
  @service location;

  get city() {
    return this.location.getCurrentCity();
  }

  get country() {
    return this.location.getCurrentCountry();
  }
}
