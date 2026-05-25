import Button from "../Elements/Button";

export default class {
  get headerLogo() {
    return new Button('[class="header_logo"]');
  }

  get guestLogIn() {
    return new Button('[class="header-link -guest"]');
  }

  get signIn() {
    return new Button('[class="btn btn-outline-white header_signin"]');
  }

  get homeBtn() {
    return new Button('[class="btn header-link -active"]');
  }

  get contactsBtn() {
    return new Button('[appscrollto="contactsSection"]');
  }

  get aboutBtn() {
    return new Button('[appscrollto="aboutSection"]');
  }
}
