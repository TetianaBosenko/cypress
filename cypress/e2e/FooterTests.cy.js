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
    basePage.footer.faceBookBtn.removeParentAttr("target");
    basePage.footer.faceBookBtn.click();
    basePage.containUrlCheck("facebook");
  });

  it("Telegram redirect test", () => {
    basePage.footer.telegramBtn.checkParentAttr("href", "t.me");
  });

  it("Youtube redirect test", () => {
    basePage.footer.youTubeBtn.removeParentAttr("target");
    basePage.footer.youTubeBtn.click();
    basePage.containUrlCheck("youtube");
  });

  it("Instagram redirect test", () => {
    basePage.footer.instagramBtn.removeParentAttr("target");
    basePage.footer.instagramBtn.click();
    basePage.containUrlCheck("instagram");
  });

  it("Linkedin redirect test", () => {
    basePage.footer.linkedinBtn.removeParentAttr("target");
    basePage.footer.linkedinBtn.click();
    basePage.containUrlCheck("linkedin");
  });

  it("Ithillel Website redirect test", () => {
    basePage.footer.ithillelWebsiteLink.removeAttr("target");
    basePage.footer.ithillelWebsiteLink.click();
    basePage.containUrlCheck("ithillel");
  });

  it("Ithillel email redirect test", () => {
    basePage.footer.ithillelEmail.checkAttr(
      "href",
      "mailto:developer@ithillel.ua",
    );
  });
});
