import BasePage from "../helpers/PageModels/BasePage";
import BaseElement from "../helpers/Elements/BaseElement";
import Button from "../helpers/Elements/Button";
import Input from "../helpers/Elements/Input";
import LogIn from "../helpers/Components/LogIn";
import SignIn from "../helpers/Components/SignIn";
import Garage from "../helpers/PageModels/Garage";

Cypress.on("uncaught:exception", (err) => {
  return false;
});

describe("Manage Car tests", () => {
  const basePage = new BasePage("/");
  const garage = new Garage();
  beforeEach(() => {
    basePage.navigate();
    garage.header.signIn.click();
    garage.login.login(Cypress.env("username"), Cypress.env("password"));
  });

  it("Add Car sucessfully", () => {
    garage.addCarBtn.click();
    garage.addCarTitle.checkVisibility();
    garage.addCar("Audi", "TT", 35000);
    garage.carName.checkText("Audi TT");
  });
});
