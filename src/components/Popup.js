export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._popupCloseButton = this._popup.querySelector(".popup__close");
    this._closeByEscape = this._handleEscClose.bind(this);
  }
  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._closeByEscape);
  }
  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._closeByEscape);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }
  _closeByOverlayPress(evt) {
    if (evt.target === evt.currentTarget) {
      this.close();
    }
  }
  setEventListeners() {
    // this._popupSelector.querySelector('.popup-profile__close').addEventListener('click', (evt) => this.close(evt))
    this._popup.addEventListener("mousedown", (evt) =>
      this._closeByOverlayPress(evt)
    );
    this._popupCloseButton.addEventListener("click", () => {
      this.close();
    });
  }
}
