import BaseElement from "./BaseElement";

export default class extends BaseElement {
  constructor(selector) {
    super(selector);
  }

  selectValue(value) {
    return this.element.type(value);
  }
}
