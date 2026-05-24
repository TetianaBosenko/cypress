import BasePage from "../helpers/PageModels/BasePage";
import BaseElement from "../helpers/Elements/BaseElement";
import Button from "../helpers/Elements/Button";
import Input from "../helpers/Elements/Input";
import LogIn from "../helpers/Components/LogIn";
import SignIn from "../helpers/Components/SignIn";
import Garage from "../helpers/PageModels/Garage";
import Expenses from "../helpers/PageModels/Expenses";

Cypress.on("uncaught:exception", (err) => {
  return false;
});

describe("Manage Expenses tests", () => {
  const basePage = new BasePage("/");
  const expense = new Expenses();
  const garage = new Garage();

  beforeEach(() => {
    garage.navigate();
    expense.header.signIn.click();
    expense.login.login(Cypress.env("username"), Cypress.env("password"));
    garage.addCarBtn.click();
    garage.addCar("Audi", "TT", 80);
  });

  it("Add Expense sucessfully", () => {
    expense.addExpenseBtn.click();
    expense.addExpenseTitle.checkVisibility();
    expense.addMileage.enterValue("20");
    expense.addLiters.enterValue("3");
    expense.addCost.enterValue("320");
    expense.addBtn.click();
    expense.expenseItem("320").checkVisibility();
  });
});
