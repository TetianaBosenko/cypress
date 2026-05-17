export default class {
  get headerLogo() {
    return cy.get('[class="header_logo"]');
  }

  get guestLogIn() {
    return cy.get('[class="header-link -guest"]');
  }

  get signIn() {
    return cy.get('[class="btn btn-outline-white header_signin"]');
  }

  get homeBtn() {
    return cy.get('[class="btn header-link -active"]');
  }

  get contactsBtn() {
    return cy.get('[appscrollto="contactsSection"]');
  }

  get aboutBtn() {
    return cy.get('[appscrollto="aboutSection"]');
  }
}
