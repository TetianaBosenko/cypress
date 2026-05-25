import BaseElement from "../Elements/BaseElement";
import Button from "../Elements/Button";
import Input from "../Elements/Input";
import BasePage from "./BasePage";

export default class Expenses extends BasePage {
  constructor() {
    super("/panel/expenses");
  }

  get addExpenseBtn() {
    return new Button(".car_add-expense.btn.btn-success");
  }

  get addExpenseTitle() {
    return new BaseElement(".modal-title:contains('Add an expense')");
  }

  get addMileage() {
    return new Input("#addExpenseMileage");
  }

  get addLiters() {
    return new Input("#addExpenseLiters");
  }

  get addCost() {
    return new Input("#addExpenseTotalCost");
  }

  get addBtn() {
    return new Button(".modal-footer .btn-primary");
  }

  expenseItem(value) {
    return new BaseElement(`tr td:contains('${value}')`);
  }
}
