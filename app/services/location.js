import Service from "@ember/service";
import { tracked } from "@glimmer/tracking";

export default class LocationService extends Service {
  @tracked city = "Wisla";
  @tracked country = "Poland";
  @tracked currentLocation = {
    x: 4321,
    y: 9876
  };

  getCurrentCity() {
    return this.city;
  }

  getCurrentCountry() {
    return this.country;
  }
}
