import Footer from "../Components/Footer";
import Header from "../Components/Header";

export default class {
  _url;
  footer = new Footer();
  header = new Header();

  constructor(url) {
    this._url = url;
  }

  navigate() {
    cy.visit(this._url, {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });
  }

  containUrlCheck(expectedUrl) {
    cy.url().should("contain", expectedUrl);
  }
}
