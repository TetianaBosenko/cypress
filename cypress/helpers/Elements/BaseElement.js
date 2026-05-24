export default class {
  constructor(selector) {
    this.element = cy.get(selector);
  }

  parent() {
    return new BaseElement.parent();
  }

  checkAttr(expectedAttr, expectedValue) {
    return this.element
      .should("have.attr", expectedAttr)
      .and("contain", expectedValue);
  }

  checkParentAttr(expectedAttr, expectedValue) {
    return this.element
      .parent()
      .should("have.attr", expectedAttr)
      .and("contain", expectedValue);
  }

  removeAttr(targetAttr) {
    return this.element.invoke("removeAttr", targetAttr);
  }

  removeParentAttr(targetAttr) {
    return this.element.parent().invoke("removeAttr", targetAttr);
  }

  checkVisibility() {
    return this.element.should("be.visible");
  }

  checkText(expectedText) {
    return this.element.should("contain.text", expectedText)
  }

  click() {
    return this.element.click();
  }
}
