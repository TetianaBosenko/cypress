import BasePage from "../helpers/PageModels/BasePage";
import Footer from "../helpers/Components/Footer";

Cypress.on("uncaught:exception", (err) => {
  return false;
});

describe("Check footer buttons", () => {
  const basePage = new BasePage("/");
  beforeEach(() => {
    basePage.navigate();
  });

  it("Facebook redirect test", () => {
    basePage.footer.faceBookBtn.parent().invoke("removeAttr", "target").click();
    basePage.containUrlCheck("facebook");
  });

  it("Telegram redirect test", () => {
    basePage.footer.telegramBtn
      .parent()
      .should("have.attr", "href")
      .and("contain", "t.me");
  });

  it("Youtube redirect test", () => {
    basePage.footer.youTubeBtn.parent().invoke("removeAttr", "target").click();
    basePage.containUrlCheck("youtube");
  });

  it("Instagram redirect test", () => {
    basePage.footer.instagramBtn
      .parent()
      .invoke("removeAttr", "target")
      .click();
    basePage.containUrlCheck("instagram");
  });

  it("Linkedin redirect test", () => {
    basePage.footer.linkedinBtn.parent().invoke("removeAttr", "target").click();
    basePage.containUrlCheck("linkedin");
  });

  it("Ithillel Website redirect test", () => {
    basePage.footer.ithillelWebsiteLink.invoke("removeAttr", "target").click();
    basePage.containUrlCheck("ithillel");
  });

  it("Ithillel email redirect test", () => {
    basePage.footer.ithillelEmail
      .should("have.attr", "href")
      .and("contain", "mailto:developer@ithillel.ua");
  });
});
