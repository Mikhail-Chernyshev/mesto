import '../pages/index.css';
import initialCards from "../script/initial-cards.js";
import Card from "../script/Card.js";
import FormValidator from "../script/FormValidator.js";
import Section from "../script/Section.js";
import PopupWithForm from "../script/PopupWithForm.js";
import PopupWithImage from "../script/PopupWithImage.js";
import UserInfo from "../script/UserInfo.js";
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
const elementListSelector = ('.elements')
const editButton = document.querySelector('.profile__button-ed-self')
const elementTemplate = document.querySelector('.element-template')
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
const profilePopup = new PopupWithForm( { popupSelector: document.querySelector('.popup-profile'), submitCallBack: (formData) => {
     const data = {
        username: profileTitle.textContent = popupName.value,
        info: profileRank.textContent = popupRank.value,
        }
      user.setUserInfo(data)
    profilePopup.close()
} }, closePopupButton)
profilePopup.setEventListeners()

const popupPost = new PopupWithForm( {popupSelector: document.querySelector('.popup-post'), submitCallBack: (user) => {
    // evt.preventDefault()
    const cardData = {name: titleElement.value , link: linkElement.value }
    addElement(cardData)
    popupPost.close()
    disableSubmitButton()
} })
popupPost.setEventListeners()
const popupPostName = document.querySelector('.popup-post__input_data_name')
const popupPostRank = document.querySelector('.popup-post__input_data_rank')
const popupBigpic = document.querySelector('.popup-bigpic')
  function createCard (data) {
    const card = new Card(config, data.name, data.link, handleCardClick, elementTemplate);
    // Создаём карточку и возвращаем наружу
    const cardElement = card.generateCard();
    return cardElement
    }
function addElement(data) {
      elements.prepend(createCard(data));
   }
     //функционал открытия попапа и добавления контента в строки ввода
     const user = new UserInfo(profileTitle, profileRank );
      
editButton.addEventListener('click', function() {
        // popupName.value = profileTitle.textContent;
        const data = user.getUserInfo();
        popupName.value = data.username;
        popupRank.value = data.info;
        // popupRank.value = profileRank.textContent;
        profilePopup.open()
    }) 
//    создаем кнопку добавления нового контента
addButton.addEventListener('click', function() {
        popupPost.open()
        popupPostName.value = '';
        popupPostRank.value = '';
    })
function handleCardClick(name, link) {
    this._popupBigpicImage.src = link //у меня стоит передача тайтла в альт картинки, при проблеме с загрузкой появляется именно этот текст
    this._popupBigpicImage.alt = name
    this._popupBigpicTitle.textContent = name;
        popupBigpicNew.open(this)
      }
    export default config
function disableSubmitButton() {
        buttonDelivery.disabled = true;
    }
const elementList = new Section({ data: initialCards, renderer: (item) => {
        elementList.addItem(createCard(item));
       
   } }, elementListSelector);
   elementList.renderElements();

const popupBigpicNew = new PopupWithImage(popupBigpic)
popupBigpicNew.setEventListeners()
