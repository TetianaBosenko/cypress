import BaseElement from "../Elements/BaseElement";
import Button from "../Elements/Button";
import Input from "../Elements/Input";

export default class {
  get loginTitle() {
    return new BaseElement(".modal-title:contains('Log in')");
  }

  get registrationBtn() {
    return new Button("button.btn.btn-link:contains('Registration')");
  }

  get forgotPassBtn() {
    return new Button("button.btn.btn-link:contains('Forgot password')");
  }

  get emailField() {
    return new Input("#signinEmail");
  }

  get passField() {
    return new Input("#signinPassword");
  }

  get loginBtn() {
    return new Button("button.btn.btn-primary:contains('Login')");
  }

  login(email, password) {
    this.emailField.enterValue(email);
    this.passField.enterValue(password, { sensitive: true });
    this.loginBtn.click();
  }
}
