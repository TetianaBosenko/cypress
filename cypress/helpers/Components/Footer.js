export default class {
  get faceBookBtn() {
    return cy.get(".socials_icon.icon-facebook");
  }

  get telegramBtn() {
    return cy.get(".socials_icon.icon-telegram");
  }

  get youTubeBtn() {
    return cy.get(".socials_icon.icon-youtube");
  }

  get instagramBtn() {
    return cy.get(".socials_icon.icon-instagram");
  }

  get linkedinBtn() {
    return cy.get(".socials_icon.icon-linkedin");
  }

  get ithillelWebsiteLink() {
    return cy.get('a[href="https://ithillel.ua"]');
  }

  get ithillelEmail() {
    return cy.get('a[href="mailto:developer@ithillel.ua"]');
  }
}
