import './index.css';
import Card from "../scripts/components/Card.js";
import FormValidator from "../scripts/components/FormValidator.js";
import Section from "../scripts/components/Section.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import UserInfo from "../scripts/components/UserInfo.js";
import { initialCards, config, elementListSelector, buttonEdit, elementTemplate, buttonClosePopup, popupName, popupRank, formEditProfile, formAddCard, buttonAddElement, popupPostName, popupPostRank } from '../scripts/utils/variable.js'

const formEditProfileValidator = new FormValidator(config, formEditProfile)
formEditProfileValidator.enableValidation()

const formAddCardValidator = new FormValidator(config, formAddCard)
formAddCardValidator.enableValidation()

const user = new UserInfo({ userName: '.profile__name', userInfo: '.profile__rank'});

const elementList = new Section({ data: initialCards, renderer: (item) => {
      elementList.addItem(createCard(item));    
 } }, elementListSelector);
 elementList.renderElements();

 const profilePopup = new PopupWithForm( { popupSelector: '.popup-profile', submitCallBack: (data) => {
  user.setUserInfo(data)
profilePopup.close()
} })
profilePopup.setEventListeners()

const popupPost = new PopupWithForm( {popupSelector: '.popup-post', submitCallBack: (data) => {
elementList.addItem(createCard(data))
popupPost.close()
formAddCardValidator.disableSubmitButton();
} })
popupPost.setEventListeners()

const popupBigpicNew = new PopupWithImage('.popup-bigpic')
popupBigpicNew.setEventListeners()

buttonEdit.addEventListener('click', function() {
        const data = user.getUserInfo();
        popupName.value = data.username;
        popupRank.value = data.info;
        profilePopup.open()
    }) 

buttonAddElement.addEventListener('click', function() {
        formAddCardValidator.disableSubmitButton()
        popupPost.open()
    })

function handleCardClick(name, link) {
        popupBigpicNew.open(name,link)
      }

function createCard (data) {
      const card = new Card(config, data.name, data.link, handleCardClick, '.element-template');
      const cardElement = card.generateCard();
      return cardElement
      }