import BasePage from "../helpers/PageModels/BasePage";
import BaseElement from "../helpers/Elements/BaseElement";
import Button from "../helpers/Elements/Button";
import Input from "../helpers/Elements/Input";
import LogIn from "../helpers/Components/LogIn";
import SignIn from "../helpers/Components/SignIn";
import Garage from "../helpers/PageModels/Garage";
import { createExpense } from "../helpers/API/expenses";
import Expenses from "../helpers/PageModels/Expenses";

Cypress.on("uncaught:exception", (err) => {
  return false;
});

describe("Manage Car tests", () => {
  const basePage = new BasePage("/");
  const garage = new Garage();
  const expense = new Expenses();
  beforeEach(() => {
    basePage.navigate();
    garage.header.signIn.click();
    garage.login.login(Cypress.env("username"), Cypress.env("password"));
  });

  it("Add Car with Expense sucessfully", () => {
    cy.intercept("POST", "/api/cars").as("createCar");
    garage.addCarBtn.click();
    garage.addCarTitle.checkVisibility();
    garage.addCar("Audi", "TT", 100);
    cy.wait("@createCar").then((interception) => {
      expect(interception.response.statusCode).to.eq(201);
      const carId = interception.response.body.data.id;
      cy.wrap(carId).as("newCarId");
      garage.carName.checkText("Audi TT");
      cy.request("GET", "/api/cars").then((response) => {
        const car = response.body.data.find((car) => car.id === carId);
        expect(car).to.exist;
        expect(car.brand).to.eq("Audi");
        expect(car.model).to.eq("TT");
      });
      createExpense(carId).then((response) => {
        const expenseId = response.body.data.id;
        expect(response.status).to.eq(200);
        expect(response.body.data.mileage).to.eq(111);
        expect(response.body.data.liters).to.eq(11);
        expect(response.body.data.totalCost).to.eq(15);
        expense.navigate(carId);
        expense.expenseItem("11L").checkVisibility();
        expense.expenseItem("15.00 USD").checkVisibility();
      });
    });
  });
});
