const showError = (formEl, formInput, errorMessage) => {
    //const formInput = formEl.querySelector('.popup__input')
    const formError = formEl.querySelector(`.${formInput.id}-error`);
    formInput.classList.add('popup__input_type_error');
    formError.textContent = errorMessage;
    formError.classList.add('popup__input-error_active');
  };

  const hideError = (formEl, formInput, errorMessage) => {
   //const formInput = formEl.querySelector('.popup__input')
    const formError = formEl.querySelector(`.${formInput.id}-error`);
    formInput.classList.remove('popup__input_type_error');
    formError.classList.remove('popup__input-error_active')
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
    const inputList = Array.from(formEl.querySelectorAll('.popup__input'));
    const formBut = formEl.querySelector('.popup__delivery')
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
  function enableValidation () {
    const formList = Array.from(document.querySelectorAll('.popup__data'))
    formList.forEach((formEl) => {
      formEl.addEventListener('submit', function (evt) {
        evt.preventDefault()
      })
      setEventListeners(formEl)
    })
  }
  enableValidation()
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
