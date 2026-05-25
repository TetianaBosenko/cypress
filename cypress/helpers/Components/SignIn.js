import BaseElement from "../Elements/BaseElement";
import Button from "../Elements/Button";
import Input from "../Elements/Input";

export default class {
  get registrationTitle() {
    return new BaseElement(".modal-title:contains('Registration')");
  }

  get nameField() {
    return new Input("#signupName");
  }

  get lastNameField() {
    return new Input("#signupLastName");
  }

  get emailField() {
    return new Input("#signupEmail");
  }
  get passField() {
    return new Input("#signupPassword");
  }
  get repeatPassField() {
    return new Input("#signupRepeatPassword");
  }

  get registerBtn() {
    return new Button("button.btn.btn-primary:contains('Register')");
  }

  get closeBtn() {
    return new Button("button.close");
  }

  get nameReqErr() {
    return new BaseElement(".invalid-feedback:contains('Name required')");
  }

  get nameLengErr() {
    return new BaseElement(
      ".invalid-feedback:contains('Name has to be from 2 to 20 characters long')",
    );
  }

  get nameInvalidErr() {
    return new BaseElement(".invalid-feedback:contains('Name is invalid')");
  }

  get lastNameReqErr() {
    return new BaseElement(".invalid-feedback:contains('Last name required')");
  }

  get lastNameLengErr() {
    return new BaseElement(
      ".invalid-feedback:contains('Last name has to be from 2 to 20 characters long')",
    );
  }

  get lastNameInvalidErr() {
    return new BaseElement(
      ".invalid-feedback:contains('Last name is invalid')",
    );
  }

  get emailReqErr() {
    return new BaseElement(".invalid-feedback:contains('Email required')");
  }

  get emailInvalErr() {
    return new BaseElement(".invalid-feedback:contains('Email is incorrect')");
  }

  get passReqErr() {
    return new BaseElement(".invalid-feedback:contains('Password required')");
  }

  get passInvalErr() {
    return new BaseElement(
      ".invalid-feedback:contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')",
    );
  }

  get passNotMatch() {
    return new BaseElement(
      ".invalid-feedback:contains('Passwords do not match')",
    );
  }

  get repeatPassReqErr() {
    return new BaseElement(
      ".invalid-feedback:contains('Re-enter password required')",
    );
  }
}
