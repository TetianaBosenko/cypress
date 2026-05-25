import BaseElement from "../Elements/BaseElement";
import Button from "../Elements/Button";

export default class {
  get faceBookBtn() {
    return new Button(".socials_icon.icon-facebook");
  }

  get telegramBtn() {
    return new Button(".socials_icon.icon-telegram");
  }

  get youTubeBtn() {
    return new Button(".socials_icon.icon-youtube");
  }

  get instagramBtn() {
    return new Button(".socials_icon.icon-instagram");
  }

  get linkedinBtn() {
    return new Button(".socials_icon.icon-linkedin");
  }

  get ithillelWebsiteLink() {
    return new Button('a[href="https://ithillel.ua"]');
  }

  get ithillelEmail() {
    return new Button('a[href="mailto:developer@ithillel.ua"]');
  }

  get contactsSection() {
    return new BaseElement("#contactsSection");
  }

  get aboutSection() {
    return new BaseElement("#aboutSection");
  }

}
