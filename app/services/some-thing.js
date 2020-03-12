import Service from "@ember/service";

export default class SomeThingService extends Service {
  someComplexMetod(value) {
    return value * 2;
  }

  metodToTest(value) {
    let doubledValue = this.someComplexMetod(value);
    return `Doubled: ${doubledValue}`;
  }
}
