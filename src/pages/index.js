import "./index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import {
  config,
  elementListSelector,
  buttonEdit,
  elementTemplate,
  buttonClosePopupProfile,
  popupProfileName,
  popupProfileRank,
  formEditProfile,
  formAddCard,
  buttonAddElement,
  popupAddCardName,
  popupAddCardLink,
  popupDeleteSelector,
  formDeleteCard,
  profileAvatar,
  editAvatarButton,
  formEditAvatar,
} from "../utils/variable.js";
import Api from "../components/Api.js";
import PopupConfirm from "../components/PopupConfirm";
//попап увеличенной картинки
const popupBigpicNew = new PopupWithImage(".popup-bigpic");
popupBigpicNew.setEventListeners();
//попап удаления
const popupDelete = new PopupConfirm({ popupSelector: ".popup-delete" });
popupDelete.setEventListeners();
//попап изменения аватара
const popupAvatar = new PopupWithForm({
  popupSelector: ".popup-avatar",
  submitCallBack: (data) => {
    popupAvatar.setLoading(true);
    api
      .editAvatar(data)
      .then((res) => {
        user.setUserInfo(res);
        popupAvatar.close();
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      })
      .finally(() => {
        popupAvatar.setLoading(false);
      });
  },
});
popupAvatar.setEventListeners();
//попап данных профиля
const profilePopup = new PopupWithForm({
  popupSelector: ".popup-profile",
  submitCallBack: (data) => {
    profilePopup.setLoading(true);
    api
      .editUserInfo(data)
      .then((res) => {
        user.setUserInfo(res);
        profilePopup.setLoading(false);
        profilePopup.close();
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      })
      .finally(() => {
        profilePopup.setLoading(false);
      });
  },
});
profilePopup.setEventListeners();
//попап добавления новой карточки
const popupPost = new PopupWithForm({
  popupSelector: ".popup-post",
  submitCallBack: (data) => {
    popupPost.setLoading(true);
    api
      .addCard(data)
      .then((res) => {
        elementList.addItem(createCard(res));
        popupPost.close();
      })
      .catch((err) => {
        console.log("ошибочка вышла");
      })
      .finally(() => {
        popupPost.setLoading(false);
      });
  },
});
popupPost.setEventListeners();
//выгрузка всех карточек
const elementList = new Section(
  {
    renderer: (item) => {
      elementList.addItem(createCard(item));
    },
  },
  elementListSelector
);
//валидация формы редактирования
const formEditProfileValidator = new FormValidator(config, formEditProfile);
formEditProfileValidator.enableValidation();
//валидация формы добавления
const formAddCardValidator = new FormValidator(config, formAddCard);
formAddCardValidator.enableValidation();
//валидация формы аватара
const formEditAvatarValidator = new FormValidator(config, formEditAvatar);
formEditAvatarValidator.enableValidation();
//экземпляр пользователя
const user = new UserInfo({
  userName: ".profile__name",
  userInfo: ".profile__rank",
  avatar: ".profile__avatar",
});
let userId;
//заводим Апи
const api = new Api({
  host: "https://mesto.nomoreparties.co/v1/cohort-47/",
  token: "dfd0d591-2c36-49ee-a6dc-331afeedf1bc",
});

Promise.all([api.getUserInfo(), api.getCards()])
  .then(([userData, items]) => {
    user.setUserInfo(userData);

    userId = userData._id;
    elementList.setCards(items);
    elementList.renderElements();
  })
  .catch((err) => {
    console.log(err);
  });
//обработчики кнопок
buttonEdit.addEventListener("click", function () {
  const data = user.getUserInfo();
  popupProfileName.value = data.username;
  popupProfileRank.value = data.info;
  profilePopup.open();
});
buttonAddElement.addEventListener("click", function () {
  formAddCardValidator.disableSubmitButton();
  popupPost.open();
});
editAvatarButton.addEventListener("click", () => {
  formEditAvatarValidator.disableSubmitButton();
  popupAvatar.open();
});
//создаем новую карточку
function createCard(data) {
  const card = new Card({
    config,
    data,
    userId,
    handleCardClick: (name, link) => {
      popupBigpicNew.open(name, link);
    },
    selectorTemplate: ".element-template",
    handleDeleteIconClick: (cardId) => {
      popupDelete.open();
      popupDelete.submitCallback(() => {
        api
          .deleteCard(cardId)
          .then(() => {
            popupDelete.close();
            card.deleteCard();
          })
          .catch((err) => {
            console.log(`Error: ${err}`);
          });
      });
    },
    handleSetLike: (data) => {
      api
        .setLikeCard(data)
        .then((data) => {
          card.likeCard(data);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    },
    handleRemoveLike: (data) => {
      api
        .removeLikeCard(data)
        .then((data) => {
          card.likeCard(data);
          card.stayCountEmpty();
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    },
  });
  const cardElement = card.generateCard();
  return cardElement;
}
