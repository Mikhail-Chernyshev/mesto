// import config from "./index.js"
// const showError = (formEl, formInput, errorMessage) => {
//     //const formInput = formEl.querySelector('.popup__input')
//     const formError = formEl.querySelector(`.${formInput.id}-error`);
//     formInput.classList.add(config.inputErrorClass);
//     formError.textContent = errorMessage;
//     formError.classList.add(config.errorClass);
//   };
// const hideError = (formEl, formInput) => {
//    //const formInput = formEl.querySelector('.popup__input')
//     const formError = formEl.querySelector(`.${formInput.id}-error`);
//     formInput.classList.remove(config.inputErrorClass);
//     formError.classList.remove(config.errorClass)
//     formError.textContent = ''
//   };
// const checkInputValidity = (formEl, formInput) => {
//     if (!formInput.validity.valid) {
//       showError(formEl, formInput, formInput.validationMessage);
//     } else {
//       hideError(formEl, formInput);
//     }
//   };
// const setEventListeners = (formEl) => {
//     const inputList = Array.from(document.querySelectorAll(config.inputSelector));
//     const formBut = formEl.querySelector(config.submitButtonSelector)
//     toggleButtonState(inputList, formBut)
//     inputList.forEach((formInput) => {
//       formInput.addEventListener('input', function () {
//         toggleButtonState(inputList, formBut)
//         checkInputValidity(formEl, formInput);
//       });
//     });
//   };
// function hasInvalidInput (inputList) {
//     return inputList.some((formInput) => {
//     return !formInput.validity.valid;
//   });
//   }
// function enableValidation (config) {
//     const formList = Array.from(document.querySelectorAll(config.formSelector))
//     formList.forEach((formEl) => {
//       formEl.addEventListener('submit', function (evt) {
//         evt.preventDefault()
//       })
//       setEventListeners(formEl)
//     })
//   }
// enableValidation(config)
// //функция деактивации кнопки
// function toggleButtonState (inputList, formBut) {
//     if (hasInvalidInput(inputList)) {
//       formBut.disabled = true;
//         //formButton.classList.add('popup__delivery_inactive')
//     } else {
//         formBut.disabled = false;
//       //formButton.classList.remove('popup__delivery_inactive')
//     }
//   }
//const cardContainer = document.querySelector(config.cardList);
//const elementTemplate = document.querySelector('.element-template').content
// const elementContent = initialCards.map(function(item) {
//     return { name: item.name, link: item.link };
// });
//const popupBigpicTitle = document.querySelector('.popup-bigpic__title')
//const popupBigpicImage = document.querySelector('.popup-bigpic__pic')
// function openPopupBigpic(card) {
//    popupBigpicImage.src = card.link; //у меня стоит передача тайтла в альт картинки, при проблеме с загрузкой появляется именно этот текст
//    popupBigpicImage.alt = card.name
//    popupBigpicTitle.textContent = card.name;
//     openPopup(popupBigpic)
// }
// render()
// function createCard(card) {
//    const elementData = elementTemplate.querySelector('.element').cloneNode(true)
//    const buttonLike = elementData.querySelector('.element__like')
//    const cardImage = elementData.querySelector('.element__image')
//    const deleteButton = elementData.querySelector('.element__trash')

//     cardImage.src = card.link;
//     cardImage.alt = card.name;
//     elementData.querySelector('.element__title').textContent = card.name;

//     cardImage.addEventListener('click', function() {
//        openPopupBigpic(card)
//     })
//     buttonLike.addEventListener('click', function() {
//        buttonLike.classList.toggle('element__like_active')
//     });
//     deleteButton.addEventListener('click', function() { 
//        elementData.remove()
//    })
//     return elementData
// }
    // начиная с этого места мы делаем форму добавления объектов на страницу с именами из массива
// function render() {
//    elementContent.forEach(addElement);
// }
// function addElement(elementData) {
//  const elementCard = createCard(elementData);
//    elements.prepend(elementCard);
// }
// initialCards.forEach((data) => {
//     // Создадим экземпляр карточки
//     //const card = new Card(config, data.name, data.link);
//     // Создаём карточку и возвращаем наружу
//     //const cardElement = card.generateCard();
//     // Добавляем в DOM
//     elements.append(createCard(data));
//   }); 
//   formEditProfile.addEventListener('submit', function(e) {
//     e.preventDefault()
//     profileTitle.textContent = popupName.value;
//     profileRank.textContent = popupRank.value;
//     profilePopup.close()
// }) 
// formAddCard.addEventListener('submit', function(e) {
//     e.preventDefault()
//     const cardData = {name: titleElement.value , link: linkElement.value }
//     addElement(cardData)
//     closePopup(popupPost)
//     disableSubmitButton()
// })
// closePopupPostButton.addEventListener('click', function() {
//         popupPost.close()
//     })
    //сделаем так, чтобы попап закрывался
    // document.addEventListener('click', (e) => {
//         if (e.target === popupOverlay) {
//           profilePopup.close()
//         }
//     }) 
// document.addEventListener('click', (e) => {
//         if (e.target === popupPostOverlay) {
//             popupPost.close()
//         }
//     }) 
// const closePopupPostButton = document.querySelector('.popup-post__close')
// const popupPostOverlay = document.querySelector('.popup-post')
// const popupOverlay = document.querySelector('.popup')
// closePopupButton.addEventListener('click', function() {
//         profilePopup.close()
//     }) 
// function openPopup(popup) {
//     popup.classList.add('popup_opened')
//    document.addEventListener('keydown', closeByEscPress)
//}
// function closeByEscPress(evt) {
//     if (evt.key === 'Escape') {
//         const popupOpened = document.querySelector('.popup_opened')
//         closePopup(popupOpened)
//     }
// }
// function closePopup(popup) {
//     popup.classList.remove('popup_opened')
//     document.removeEventListener('keydown', closeByEscPress)
// }
    //функция выше открывает попап с пустыми полями даже после ввода данных
    // делаем попап картинок
// popupBigpicClose.addEventListener('click', function() {
//         closePopup(popupBigpic)
//     })
    //ниже мы настраиваем закрытие попапа по клику ну оверлэй
// document.addEventListener('click', (e) => {
//         if (e.target === popupBigpicOverlay) {
//             closePopup(popupBigpic)
//         }
//     })
// const popupBigpicOverlay = document.querySelector('.popup-bigpic')
// const popupBigpicClose = document.querySelector('.popup-bigpic__close')
  //profilePopup.getInputValues()
   // user.setUserInfo(formData)
    // profileTitle.textContent = popupName.value;
    // profileRank.textContent = popupRank.value;
    // function addElement(data) {
//      // elementContainer.prepend(createCard(data));
//      elementList.addItem(createCard(data))
//    }
     //функционал открытия попапа и добавления контента в строки ввода
      // function disableSubmitButton() {
//         buttonDelivery.disabled = true;
//     }
        // popupBigpicTitle.textContent = name;
        // popupBigpicImage.src = link;
        // popupBigpicImage.alt = name;
                    // popupName.value = profileTitle.textContent;
              // popupRank.value = profileRank.textContent;
//               const popupBigpic = document.querySelector('.popup-bigpic')
// const popupBigpicTitle = document.querySelector('.popup-bigpic__title')
// const popupBigpicImage = document.querySelector('.popup-bigpic__pic')
// const titleElement = document.querySelector('.popup-post__input_data_name')
// const linkElement = document.querySelector('.popup-post__input_data_rank')
// const buttonDelivery = document.querySelector('.popup-post__delivery')
// const profileTitle = document.querySelector('.profile__name')
// const profileRank = document.querySelector('.profile__rank')
// const elementContainer = document.querySelector('.elements')
// const profilePopup = new PopupWithForm( { popupSelector: '.popup-profile', submitCallBack: (data) => { //создаем попап редактирования данных профиля
//   user.setUserInfo(data)  //устанавливаем новые данные в страницу профиля
//   profilePopup.close() //закрываем попап после сабмита
//   } })
// const popupPost = new PopupWithForm( {popupSelector: '.popup-post', submitCallBack: (data) => {//создаем попап доблавления карточки и передаем через сабмит дату формы
// elementList.addItem(createCard(data)) //после сабмита добавляем новую карточку в список карточек
// popupPost.close() //закрываем попап
// formAddCardValidator.disableSubmitButton(); //выключаем кнопку отправки
// } })
// function handleCardClick(name, link) {
//         popupBigpicNew.open(name,link)
//       }
// function handleDeleteIconClick() {
// popupDelete.open()
// }
    //  this._formSubmit.addEventListener('click', () => {
        // deleteCard(this._cardId)
      //  });
          // getElement() {
    //     return this._element;
    // }