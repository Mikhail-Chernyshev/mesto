//const formEl = document.querySelector('.popup__data')
class FormValidator {
constructor (config, formElement) {
    this._config = config;
    this._form = formElement;
   // this._formInput = config.inputSelector;
   this._formButton = this._form.querySelector(this._config.submitButtonSelector)
    this._inputList = Array.from(this._form.querySelectorAll(this._config.inputSelector));
}
_checkInputValidity(formInput) {
        if (!formInput.validity.valid) {
          this._showError(formInput, formInput.validationMessage);
        } else {
          this._hideInputError(formInput);
        }
      };

_showError(formInput, errorMessage) {
    const formError = this._form.querySelector(`.${formInput.id}-error`)
    formInput.classList.add(this._config.inputErrorClass);
    formError.textContent = errorMessage;
    formError.classList.add(this._config.errorClass);
  
}
_hideInputError(formInput) {
    const formError = this._form.querySelector(`.${formInput.id}-error`);
    formInput.classList.remove(this._config.inputErrorClass);
    formError.classList.remove(this._config.errorClass)
    formError.textContent = ''
}
// _enableSubmitButton (formEl) {
//     const formBut = this._form.querySelector(this._config.submitButtonSelector)
//     formBut.disabled = true;
// }3
_toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
        this._formButton.disabled = true;
          //formButton.classList.add('popup__delivery_inactive')
      } else {
        this._formButton.disabled = false;
        //formButton.classList.remove('popup__delivery_inactive')
      }
}
_hasInvalidInput() {
    return this._inputList.some((formInput) => {
        return !formInput.validity.valid;
      });
    
}
_setEventListeners() {
   // const inputList = Array.from(this._form.querySelectorAll('.popup__input'));
    //const formBut = this._form.querySelector(this._config.submitButtonSelector)
    //toggleButtonState(inputList, formBut)
    this._inputList.forEach((formInput) => {
      formInput.addEventListener('input', () => {
        this._toggleButtonState()
        this._checkInputValidity(formInput);
      });

    });
}
disableSubmitButton() {
  this._formButton.disabled = true;
}
enableValidation() {
      this._setEventListeners()
    }
    
}


export default FormValidator