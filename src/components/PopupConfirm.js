import Popup from "./Popup.js";
export default class PopupConfirm extends Popup {
  constructor({ popupSelector }) {
    super(popupSelector);
    this._formSubmit = this._popup.querySelector(".popup__delivery");
  }
  clickRemove(removing) {
    this._getClick = removing;
  }
  setEventListeners() {
    super.setEventListeners();
    this._formSubmit.addEventListener("click", (evt) => {
      evt.preventDefault();
      this._getClick();
    });
  }
}
