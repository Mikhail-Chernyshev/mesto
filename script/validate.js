import config from "./index.js"
const formElement = document.querySelectorAll(config.formSelector)
const showError = (formEl, formInput, errorMessage) => {
    //const formInput = formEl.querySelector('.popup__input')
    const formError = formEl.querySelector(`.${formInput.id}-error`);
    formInput.classList.add(config.inputErrorClass);
    formError.textContent = errorMessage;
    formError.classList.add(config.errorClass);
  };
const hideError = (formEl, formInput) => {
   //const formInput = formEl.querySelector('.popup__input')
    const formError = formEl.querySelector(`.${formInput.id}-error`);
    formInput.classList.remove(config.inputErrorClass);
    formError.classList.remove(config.errorClass)
    formError.textContent = ''
  };
const checkInputValidity = (formEl, formInput) => {
    if (!formInput.validity.valid) {
      showError(formEl, formInput, formInput.validationMessage);
    } else {
      hideError(formEl, formInput);
    }
  };
const setEventListeners = (formEl) => {
    const inputList = Array.from(formEl.querySelectorAll(config.inputSelector));
    const formBut = formEl.querySelector(config.submitButtonSelector)
    toggleButtonState(inputList, formBut)
    inputList.forEach((formInput) => {
      formInput.addEventListener('input', function () {
        toggleButtonState(inputList, formBut)
        checkInputValidity(formEl, formInput);
      });
    });
  };
function hasInvalidInput (inputList) {
    return inputList.some((formInput) => {
    return !formInput.validity.valid;
  });
  }
function enableValidation (config) {
    const formList = Array.from(document.querySelectorAll(config.formSelector))
    formList.forEach((formEl) => {
      formEl.addEventListener('submit', function (evt) {
        evt.preventDefault()
      })
      setEventListeners(formEl)
    })
  }
enableValidation(config)
//функция деактивации кнопки
function toggleButtonState (inputList, formBut) {
    if (hasInvalidInput(inputList)) {
      formBut.disabled = true;
        //formButton.classList.add('popup__delivery_inactive')
    } else {
        formBut.disabled = false;
      //formButton.classList.remove('popup__delivery_inactive')
    }
  }
