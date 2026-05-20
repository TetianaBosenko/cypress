import BasePage from "../helpers/PageModels/BasePage";
import Footer from "../helpers/Components/Footer";

Cypress.on("uncaught:exception", (err) => {
  return false;
});

describe("Check header buttons", () => {
  const basePage = new BasePage("/");
  beforeEach(() => {
    basePage.navigate();
  });

  it("Header logo redirect test", () => {
    basePage.header.headerLogo.click();
    basePage.containUrlCheck("https://qauto.forstudy.space/");
  });

  it("Home button logo redirect test", () => {
    basePage.header.homeBtn.click();
    basePage.containUrlCheck("https://qauto.forstudy.space/");
  });

  it("Contacts scroll test", () => {
    basePage.header.contactsBtn.click();
    cy.get("#contactsSection").should("be.visible");
  });

  it("About scroll test", () => {
    basePage.header.aboutBtn.click();
    cy.get("#aboutSection").should("be.visible");
  });

  it("Guest Login redirect test", () => {
    basePage.header.guestLogIn.click();
    basePage.containUrlCheck("/panel/garage");
  });

  it("Sign In modal test", () => {
    basePage.header.signIn.click();
    cy.get(".modal-title").should("be.visible");
  });
});
