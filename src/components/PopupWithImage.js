import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupBigpicImage = this._popup.querySelector(".popup-bigpic__pic");
    this._popupBigpicTitle = this._popup.querySelector(".popup-bigpic__title");
  }
  open(name, link) {
    this._popupBigpicTitle.textContent = name;
    this._popupBigpicImage.src = link;
    this._popupBigpicImage.alt = name;
    super.open();
  }
  close() {
    super.close();
  }
  setEventListeners() {
    super.setEventListeners();
  }
}
