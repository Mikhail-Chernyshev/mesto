
export default class Popup {
    constructor ( popupSelector ) {
        this._popupSelector = popupSelector;
        this._popupCloseButton = this._popupSelector.querySelector('.popup__close');
    }
    open() {
        this._popupSelector.classList.add('popup_opened')

    }
    close() {
        this._popupSelector.classList.remove('popup_opened')
       // document.removeEventListener('keydown', this._closeByEscPress)
    }
    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close()
        }
    }
    _closeByOverlayPress(evt) {
        if (evt.target === evt.currentTarget) {
            this.close();
        }
    }
    setEventListeners() {
       // this._popupSelector.querySelector('.popup-profile__close').addEventListener('click', (evt) => this.close(evt))
        this._popupSelector.addEventListener('mousedown', (evt) => this._closeByOverlayPress(evt));
        document.addEventListener('keydown', (evt) => {
            this._handleEscClose(evt)
        })
        this._popupCloseButton.addEventListener("click", () => {
            this.close();
          });
    }
}