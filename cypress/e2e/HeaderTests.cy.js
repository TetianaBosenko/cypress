import BasePage from "../helpers/PageModels/BasePage";
import Footer from "../helpers/Components/Footer";
import Header from "../helpers/Components/Header";

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
    basePage.footer.contactsSection.checkVisibility();
  });

  it("About scroll test", () => {
    basePage.header.aboutBtn.click();
    basePage.footer.aboutSection.checkVisibility();
  });

  it("Guest Login redirect test", () => {
    basePage.header.guestLogIn.click();
    basePage.containUrlCheck("/panel/garage");
  });

  it("Sign In modal test", () => {
    basePage.header.signIn.click();
    basePage.login.loginTitle.checkVisibility();
  });
});
