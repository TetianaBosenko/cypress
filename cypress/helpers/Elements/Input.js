import BaseElement from "./BaseElement";

export default class extends BaseElement {
  constructor(selector) {
    super(selector);
  }

  enterValue(text, options) {
    return this.element.type(text, options);
  }

  click() {
    return this.element.click();
  }
}
