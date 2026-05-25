import BasePage from "../helpers/PageModels/BasePage";
import Button from "../helpers/Elements/Button";
import Input from "../helpers/Elements/Input";
import LogIn from "../helpers/Components/LogIn";
import SignIn from "../helpers/Components/SignIn";

Cypress.on("uncaught:exception", (err) => {
  return false;
});

describe("Login tests", () => {
  const basePage = new BasePage("/");
  beforeEach(() => {
    basePage.navigate();
  });

  it("Successful login", () => {
    basePage.header.signIn.click();
    basePage.login.login(Cypress.env("username"), Cypress.env("password"));
    basePage.containUrlCheck("/panel/garage");
  });
});
