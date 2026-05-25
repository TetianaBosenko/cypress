import BasePage from "../helpers/PageModels/BasePage";
import Button from "../helpers/Elements/Button";
import Input from "../helpers/Elements/Input";
import LogIn from "../helpers/Components/LogIn";
import SignIn from "../helpers/Components/SignIn";

Cypress.on("uncaught:exception", (err) => {
  return false;
});

describe("Registration tests", () => {
  const basePage = new BasePage("/");
  beforeEach(() => {
    basePage.navigate();
  });

  it("Successful registration", () => {
    const email = `test${Date.now()}@test.com`;
    basePage.header.signIn.click();
    basePage.login.loginTitle.checkVisibility();
    basePage.login.registrationBtn.click();
    basePage.signin.registrationTitle.checkVisibility();
    basePage.signin.nameField.enterValue("Bruce");
    basePage.signin.lastNameField.enterValue("Wayne");
    basePage.signin.emailField.enterValue(email);
    basePage.signin.passField.enterValue("T6urt2mv!", { sensitive: true });
    basePage.signin.repeatPassField.enterValue("T6urt2mv!", {
      sensitive: true,
    });
    basePage.signin.registerBtn.click();
    basePage.containUrlCheck("/panel/garage");
  });

  it("Name required validation", () => {
    basePage.header.signIn.click();
    basePage.login.registrationBtn.click();
    basePage.signin.nameField.click();
    basePage.signin.lastNameField.click();
    basePage.signin.nameReqErr.checkVisibility();
    basePage.signin.closeBtn.click();
  });

  it("Name length validation", () => {
    basePage.header.signIn.click();
    basePage.login.registrationBtn.click();
    basePage.signin.nameField.enterValue("T");
    basePage.signin.lastNameField.click();
    basePage.signin.nameLengErr.checkVisibility();
    basePage.signin.closeBtn.click();
  });

  it("Name invalid validation", () => {
    basePage.header.signIn.click();
    basePage.login.registrationBtn.click();
    basePage.signin.nameField.enterValue("^");
    basePage.signin.lastNameField.click();
    basePage.signin.nameInvalidErr.checkVisibility();
    basePage.signin.closeBtn.click();
  });

  it("Last name required validation", () => {
    basePage.header.signIn.click();
    basePage.login.registrationBtn.click();
    basePage.signin.lastNameField.click();
    basePage.signin.emailField.click();
    basePage.signin.lastNameReqErr.checkVisibility();
    basePage.signin.closeBtn.click();
  });

  it("Lasr name invalid validation", () => {
    basePage.header.signIn.click();
    basePage.login.registrationBtn.click();
    basePage.signin.lastNameField.enterValue("^");
    basePage.signin.nameField.click();
    basePage.signin.lastNameInvalidErr.checkVisibility();
    basePage.signin.closeBtn.click();
  });

  it("Last name length validation", () => {
    basePage.header.signIn.click();
    basePage.login.registrationBtn.click();
    basePage.signin.lastNameField.enterValue("T");
    basePage.signin.nameField.click();
    basePage.signin.lastNameLengErr.checkVisibility();
    basePage.signin.closeBtn.click();
  });

  it("Email required validation", () => {
    basePage.header.signIn.click();
    basePage.login.registrationBtn.click();
    basePage.signin.emailField.click();
    basePage.signin.passField.click();
    basePage.signin.emailReqErr.checkVisibility();
    basePage.signin.closeBtn.click();
  });

  it("Email required validation", () => {
    basePage.header.signIn.click();
    basePage.login.registrationBtn.click();
    basePage.signin.emailField.enterValue("test");
    basePage.signin.passField.click();
    basePage.signin.emailInvalErr.checkVisibility();
    basePage.signin.closeBtn.click();
  });

  it("Password required validation", () => {
    basePage.header.signIn.click();
    basePage.login.registrationBtn.click();
    basePage.signin.passField.click();
    basePage.signin.repeatPassField.click();
    basePage.signin.passReqErr.checkVisibility();
    basePage.signin.closeBtn.click();
  });

  it("Password invalid validation", () => {
    basePage.header.signIn.click();
    basePage.login.registrationBtn.click();
    basePage.signin.passField.enterValue("test");
    basePage.signin.repeatPassField.click();
    basePage.signin.passInvalErr.checkVisibility();
    basePage.signin.closeBtn.click();
  });

  it("Password not match validation", () => {
    basePage.header.signIn.click();
    basePage.login.registrationBtn.click();
    basePage.signin.passField.enterValue("T6urt2mv!");
    basePage.signin.repeatPassField.enterValue("T6urt2mv1");
    basePage.signin.nameField.click();
    basePage.signin.passNotMatch.checkVisibility();
    basePage.signin.closeBtn.click();
  });

  it("Re-enter password validation", () => {
    basePage.header.signIn.click();
    basePage.login.registrationBtn.click();
    basePage.signin.repeatPassField.click();
    basePage.signin.passField.click();
    basePage.signin.repeatPassReqErr.checkVisibility();
    basePage.signin.closeBtn.click();
  });
});
