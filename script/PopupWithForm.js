import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
    constructor ( { popupSelector, submitCallBack }) {
        super(popupSelector);
        this._submitCallBack = submitCallBack;
        this._formSubmit = this._formSubmit.bind(this);
        this._form = this._popupSelector.querySelector('.popup__data');

    }

      _formSubmit(evt) {
        evt.preventDefault();
        this._submitCallBack();
      }
 
    close() {
        super.close();
        this._form.reset();
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', this._formSubmit);

    }
}