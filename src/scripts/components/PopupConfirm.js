import Card from "./Card.js";
import Popup from "./Popup.js";
import deleteCard from "../../pages/index.js";
export default class PopupConfirm extends Popup {
    constructor({popupSelector}) {
        super(popupSelector)
        this._formSubmit = this._popup.querySelector('.popup__delivery');
    }
    setEventListeners() {
        super.setEventListeners();
      }
}