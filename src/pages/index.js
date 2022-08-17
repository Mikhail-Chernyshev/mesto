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
const popupBigpicNew = new PopupWithImage(".popup-bigpic"); //создаём попап с картинкой
popupBigpicNew.setEventListeners(); //активируем слушатели
//попап удаления
const popupDelete = new PopupConfirm({ popupSelector: ".popup-delete" }); //создаём попап удаления
popupDelete.setEventListeners(); //включаем его слушатели
//попап изменения аватара
const popupAvatar = new PopupWithForm({
  //создаём попап изменения аватара
  popupSelector: ".popup-avatar", //селектор попапа
  submitCallBack: (data) => {
    //обработчик сабмита, принимающий данные из ГетИнпутВалюес
    popupAvatar.setLoading(true); //изменяем состояние кнопки на Загрузку
    api
      .editAvatar(data) //отправляем на Апи данные нового аватара
      .then((res) => {
        //получаем объект пользователя
        user.setUserInfo(res); //устанавливаем новые данные в юзера через метод сетюзенинфо и данные (рез)
        popupAvatar.close(); //закрываем попап аватара
      })
      .catch((err) => {
        //ловим ошибку
        console.log(`Error: ${err}`);
      })
      .finally(() => {
        popupAvatar.setLoading(false);
      });
  },
});
popupAvatar.setEventListeners(); //включаем его слушатели
//попап данных профиля
const profilePopup = new PopupWithForm({
  //создаем попап редактирования данных профиля
  popupSelector: ".popup-profile", //селектор попапа
  submitCallBack: (data) => {
    //обработчик сабмита, принимающий данные ДАТА из ГетИнпутВалюес
    profilePopup.setLoading(true); //изменяем состояние кнопки на Загрузку
    api
      .editUserInfo(data) //отправляем на Апи новые данные
      .then((res) => {
        //получаем объект пользователя
        user.setUserInfo(res);
        profilePopup.setLoading(false); //устанавливаем через метод СетЮзерИнфо
        profilePopup.close(); //закрываем попап
      })
      .catch((err) => {
        //ловим ошибку
        console.log(`Error: ${err}`);
      })
      .finally(() => {
        profilePopup.setLoading(false);
      });
  },
});
profilePopup.setEventListeners(); //активируем  слушатели попапа
//попап добавления новой карточки
const popupPost = new PopupWithForm({
  //создаэём попап добавления новой карточки
  popupSelector: ".popup-post", //селектор попапа
  submitCallBack: (data) => {
    //передаем через сабмит дату формы из ГетИнпутВалюус
    popupPost.setLoading(true); //статус загрузки кнопки
    api
      .addCard(data) //отправляем на сервер методом аддкард данные
      .then((res) => {
        //получаем объект карточки
        elementList.addItem(createCard(res)); //добавляем новую карточку в список карточек
        popupPost.close(); //закрываем попап
      })
      .catch((err) => {
        //ловим ошибку
        console.log("ошибочка вышла");
      })
      .finally(() => {
        popupPost.setLoading(false);
      });
  },
});
popupPost.setEventListeners(); //активируем слушатели попапа
//выгрузка всех карточек
const elementList = new Section(
  {
    //создаем список карточек
    renderer: (item) => {
      //через метод рендерер класса Секшн передаем массив объектов items
      elementList.addItem(createCard(item)); //каждую новую карточку добавляем в этот список
    },
  },
  elementListSelector
); //селектор списка элементов
//валидация формы редактирования
const formEditProfileValidator = new FormValidator(config, formEditProfile); // создаем валидацию редактирования профиля
formEditProfileValidator.enableValidation(); //запускаем валидацию в нём
//валидация формы добавления
const formAddCardValidator = new FormValidator(config, formAddCard); //создаём валидацию добавления новой карточки
formAddCardValidator.enableValidation(); //также запускаем валидацию, за которую отвечает метод энэйблВалидэйшн
//валидация формы аватара
const formEditAvatarValidator = new FormValidator(config, formEditAvatar); //создаём валидацию добавления нового аватара
formEditAvatarValidator.enableValidation(); //запускаем валидацию
//экземпляр пользователя
const user = new UserInfo({
  //создаём экземпляр профиля
  userName: ".profile__name", //юзернейм
  userInfo: ".profile__rank", //юзеринфо
  avatar: ".profile__avatar",
}); //аватар селектор
let userId; //вводим переменную юзерНейм
//заводим Апи
const api = new Api({
  //создаём Апи
  host: "https://mesto.nomoreparties.co/v1/cohort-47/", //подключаем хост
  token: "dfd0d591-2c36-49ee-a6dc-331afeedf1bc", //токен
});

Promise.all([
  //в Promise.all передаем массив промисов которые нужно выполнить
  api.getUserInfo(),
  api.getCards(),
])
  .then(([userData, items]) => {
    //попадаем сюда когда оба промиса будут выполнены
    user.setUserInfo(userData); //устанавливаем в поля данные из Апи методом сетЮзерИнфо
    //userName = userData.name;
    userId = userData._id;
    elementList.setCards(items); //получаем карточки методом сетКардс, который сейчас создадим в сектион
    elementList.renderElements();
    // у нас есть все нужные данные, отрисовываем страницу
  })
  .catch((err) => {
    //попадаем сюда если один из промисов завершаться ошибкой
    console.log(err);
  });
//обработчики кнопок
buttonEdit.addEventListener("click", function () {
  //при нажамитии на кнопку "редактировать"
  const data = user.getUserInfo(); //заводим дату, которая получает в себя данные методом гетЮзерИнфо
  popupProfileName.value = data.username; //устанавливаем в строку имени имя пользователя
  popupProfileRank.value = data.info; //а в инфо о себе графу о себе
  profilePopup.open(); //открываем попап для редактирования
});
buttonAddElement.addEventListener("click", function () {
  //при нажатии на кнопку "добавить"
  formAddCardValidator.disableSubmitButton(); //делаем неактивной кнопку отправить
  popupPost.open(); //открываем попап новой карточки
});
editAvatarButton.addEventListener("click", () => {
  //при нажатии на кнопку редактировать аватар
  formEditAvatarValidator.disableSubmitButton()
  popupAvatar.open(); //открываем соттветствующий аватар
});
function createCard(data) {
  //функция создания новой карточки
  const card = new Card({
    //создаём экземпляр карточки
    config,
    data,
    userId, //передаем необходимые данные
    handleCardClick: (name, link) => {
      //потом функцию-колбэк, принимающую в себя имя и адрес картинки
      popupBigpicNew.open(name, link); //открываем  увеличенный картинка
    },
    selectorTemplate: ".element-template", //селектор карточки
    handleDeleteIconClick: (cardId) => {
      //колбэк кнопки удалить на карточке
      popupDelete.open(); //открываем попап удаления
      popupDelete.submitCallback(() => {
        api
          .deleteCard(cardId)
          .then(() => {
            popupDelete.close();
            card.deleteCard();
          })
          .catch((err) => {
            //ловим ошибку
            console.log(`Error: ${err}`);
          }); //попап закрывается
      });
    },
    handleSetLike: (data) => {
      //обработчик нажатия лайка которому мы передаем кардАйди
      api
        .setLikeCard(data) //вызываем метод сетлайккард у Апи
        .then((data) => {
          //получаем результат объект
          card.likeCard(data); //непосредственно ставим лайк методом лайккард класса кард
        })
        .catch((err) => {
          //ловим ошибку
          console.log(`Ошибка: ${err}`);
        });
    },
    handleRemoveLike: (data) => {
      //обработчик нажатия лайка и отмены лайка
      api
        .removeLikeCard(data) //убираем лайк методом
        .then((data) => {
          //результат
          card.likeCard(data);
          card.stayCountEmpty(); // убираем лайк
        })
        .catch((err) => {
          //ловим ошибку
          console.log(`Ошибка: ${err}`);
        });
    },
  });
  const cardElement = card.generateCard(); //создаем элемент карточки методом генерэйтКард
  return cardElement; //возвращаем его
} //карточка создана!
