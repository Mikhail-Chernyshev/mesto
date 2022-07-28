import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
    constructor ( { popupSelector, submitCallBack }) {
        super(popupSelector);
        this._submitCallBack = submitCallBack;
       // this._formSubmit = this._formSubmit.bind(this);
        this._form = this._popup.querySelector('.popup__data');
        this._inputs = Array.from(this._form.querySelectorAll('.popup__input'));
        this._submitButton = this._form.querySelector('.popup__delivery');
    }
      _getInputValues() {
        const data = {};
        this._inputs.forEach((input) => {
          data[input.name] = input.value;
        });
        return data;
      }
    close() {
        super.close();
        this._form.reset();
    }
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitCallBack(this._getInputValues());
        });

    }
}
  