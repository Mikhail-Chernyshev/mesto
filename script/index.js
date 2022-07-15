import initialCards from "./initial-cards.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
//переменные
const config = {
    formSelector: '.popup__data',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__delivery',
    inactiveButtonClass: 'popup__delivery_inactive',
    popupInputError: '.popup__input-error',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active',
    templateItem: '.element-template',
    cardButtonDelete: '.element__trash',
    cardButtonLike: '.element__like',
    cardButtonLikeActive: 'element__like_active',
    cardList: '.elements',
    cardTextItem: '.element__title',
    cardImageItem: '.element__image',
    cardPopup: '.popup-bigpic',
    cardPopupImage: '.popup-bigpic__pic',
    cardPopupTitle: '.popup-bigpic__title',
    addCardForm: '.popup-post__data',
}
const elements = document.querySelector('.elements')
const editButton = document.querySelector('.profile__button-ed-self')
const popupOverlay = document.querySelector('.popup')
const popupPostOverlay = document.querySelector('.popup-post')
const popupBigpicOverlay = document.querySelector('.popup-bigpic')
const profilePopup = document.querySelector('.popup-profile')
const closePopupButton = document.querySelector('.popup-profile__close')
const profileTitle = document.querySelector('.profile__name')
const profileRank = document.querySelector('.profile__rank')
const popupName = document.querySelector('.popup__input_data_name')
const popupRank = document.querySelector('.popup__input_data_rank')
const formEditProfile = document.querySelector('.popup__data_one')
const formEditProfileValidator = new FormValidator(config, formEditProfile)
formEditProfileValidator.enableValidation()
const formAddCard = document.querySelector('.popup-post__data')
const formAddCardValidator = new FormValidator(config, formAddCard)
formAddCardValidator.enableValidation()
const titleElement = document.querySelector('.popup-post__input_data_name')
const linkElement = document.querySelector('.popup-post__input_data_rank')
const buttonDelivery = document.querySelector('.popup-post__delivery')
const addButton = document.querySelector('.profile__button-add-self')
const closePopupPostButton = document.querySelector('.popup-post__close')
const popupPost = document.querySelector('.popup-post')
const popupPostName = document.querySelector('.popup-post__input_data_name')
const popupPostRank = document.querySelector('.popup-post__input_data_rank')
const popupBigpic = document.querySelector('.popup-bigpic')
const popupBigpicClose = document.querySelector('.popup-bigpic__close')
initialCards.forEach((data) => {
    // Создадим экземпляр карточки
    const card = new Card(config, data.name, data.link);
    // Создаём карточку и возвращаем наружу
    const cardElement = card.generateCard();
    // Добавляем в DOM
    document.querySelector('.elements').append(cardElement);
  }); 
  formEditProfile.addEventListener('submit', function(e) {
    e.preventDefault()
    profileTitle.textContent = popupName.value;
    profileRank.textContent = popupRank.value;
    closePopup(profilePopup)
}) 
formAddCard.addEventListener('submit', function(e) {
    e.preventDefault()
    const cardData = {name: titleElement.value , link: linkElement.value }
    addElement(cardData)
    closePopup(popupPost)
    disableSubmitButton(buttonDelivery)
})
function addElement(data) {
    const card = new Card(config, data.name, data.link);
    const cardElement = card.generateCard();
      elements.prepend(cardElement);
   }
     //функционал открытия попапа и добавления контента в строки ввода
function openPopup(popup) {
    popup.classList.add('popup_opened')
    document.addEventListener('keydown', closeByEscPress)
}
function closeByEscPress(evt) {
    if (evt.key === 'Escape') {
        const popupOpened = document.querySelector('.popup_opened')
        closePopup(popupOpened)
    }
}
function closePopup(popup) {
    popup.classList.remove('popup_opened')
    document.removeEventListener('keydown', closeByEscPress)
}
editButton.addEventListener('click', function() {
        openPopup(profilePopup)
        popupName.value = profileTitle.textContent;
        popupRank.value = profileRank.textContent;
    }) 
closePopupButton.addEventListener('click', function() {
        closePopup(profilePopup)
    }) 
//    создаем кнопку добавления нового контента
addButton.addEventListener('click', function() {
        openPopup(popupPost)
        popupPostName.value = null;
        popupPostRank.value = null;
    })
    //функция выше открывает попап с пустыми полями даже после ввода данных
    // делаем попап картинок
closePopupPostButton.addEventListener('click', function() {
        closePopup(popupPost)
    })
    //сделаем так, чтобы попап закрывался
popupBigpicClose.addEventListener('click', function() {
        closePopup(popupBigpic)
    })
    //ниже мы настраиваем закрытие попапа по клику ну оверлэй
document.addEventListener('click', (e) => {
        if (e.target === popupOverlay) {
            closePopup(profilePopup)
        }
    }) 
document.addEventListener('click', (e) => {
        if (e.target === popupPostOverlay) {
            closePopup(popupPost)
        }
    }) 
document.addEventListener('click', (e) => {
        if (e.target === popupBigpicOverlay) {
            closePopup(popupBigpic)
        }
    })
function disableSubmitButton(buttonDelivery) {
        buttonDelivery.disabled = true;
    }
export default config
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