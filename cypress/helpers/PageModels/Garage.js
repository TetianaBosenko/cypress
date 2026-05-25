import BaseElement from "../Elements/BaseElement";
import Button from "../Elements/Button";
import Input from "../Elements/Input";
import Select from "../Elements/Select";
import BasePage from "./BasePage";

export default class extends BasePage {
  constructor() {
    super("/panel/garage");
  }

  get addCarBtn() {
    return new Button("button.btn.btn-primary:contains('Add car')");
  }

  get addCarTitle() {
    return new BaseElement(".modal-title:contains('Add a car')");
  }

  get selectCarBrand() {
    return new Select("#addCarBrand");
  }

  get selectCarModel() {
    return new Select("#addCarModel");
  }

  get addCarMileage() {
    return new Input("#addCarMileage");
  }

  get cancelBtn() {
    return new Button("button.btn.btn-secondary:contains('Cancel')");
  }

  get addBtn() {
    return new Button(".modal-footer .btn-primary");
  }

  get carItem() {
    return new BaseElement(".car-item");
  }

  get carName() {
    return new BaseElement(".car_name");
  }

  addCar(brand, model, mileage) {
    this.selectCarBrand.selectValue(brand);
    this.selectCarModel.selectValue(model);
    this.addCarMileage.enterValue(mileage);
    this.addBtn.click();
  }
}
