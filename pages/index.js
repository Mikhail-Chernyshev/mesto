//import './pages/index.css';
import initialCards from "../scripts/initial-cards.js";
import Card from "../scripts/Card.js";
import FormValidator from "../scripts/FormValidator.js";
import Section from "../scripts/Section.js";
import PopupWithForm from "../scripts/PopupWithForm.js";
import PopupWithImage from "../scripts/PopupWithImage.js";
import UserInfo from "../scripts/UserInfo.js";
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
const elementContainer = document.querySelector('.elements')
const elementListSelector = ('.elements')
const buttonEdit = document.querySelector('.profile__button-ed-self')
const elementTemplate = document.querySelector('.element-template')
const buttonClosePopup = document.querySelector('.popup-profile__close')
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
const buttonAddElement = document.querySelector('.profile__button-add-self')
  function createCard (data) {
    const card = new Card(config, data.name, data.link, handleCardClick, elementTemplate);
    // Создаём карточку и возвращаем наружу
    const cardElement = card.generateCard();
    return cardElement
    }
const user = new UserInfo({ userName: '.profile__name', userInfo: '.profile__rank'});
const elementList = new Section({ data: initialCards, renderer: (item) => {
      elementList.addItem(createCard(item));    
 } }, elementListSelector);
 elementList.renderElements();

const profilePopup = new PopupWithForm( { popupSelector: '.popup-profile', submitCallBack: (data) => {
      user.setUserInfo(data)
    profilePopup.close()
} }, buttonClosePopup)
profilePopup.setEventListeners()

const popupPost = new PopupWithForm( {popupSelector: '.popup-post', submitCallBack: (data) => {
    elementList.addItem(createCard(data))
    popupPost.close()
   formAddCardValidator.disableSubmitButton();
} })
popupPost.setEventListeners()
const popupPostName = document.querySelector('.popup-post__input_data_name')
const popupPostRank = document.querySelector('.popup-post__input_data_rank')
buttonEdit.addEventListener('click', function() {
        const data = user.getUserInfo();
        popupName.value = data.username;
        popupRank.value = data.info;
        profilePopup.open()
    }) 
//    создаем кнопку добавления нового контента
buttonAddElement.addEventListener('click', function() {
        popupPost.open()
        popupPostName.value = '';
        popupPostRank.value = '';
    })
const popupBigpicNew = new PopupWithImage('.popup-bigpic')
popupBigpicNew.setEventListeners()
function handleCardClick(name, link) {
        popupBigpicNew.open(name,link)
      }
    export default config
export {profileTitle, profileRank};