import './index.css';
import Card from "../scripts/components/Card.js";
import FormValidator from "../scripts/components/FormValidator.js";
import Section from "../scripts/components/Section.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import UserInfo from "../scripts/components/UserInfo.js";
import { config, elementListSelector, buttonEdit, elementTemplate, buttonClosePopup, popupName, popupRank, formEditProfile, formAddCard, buttonAddElement, popupPostName, popupPostRank, popupDeleteSelector, formDeleteCard, profileAvatar, editAvatarButton, formEditAvatar } from '../scripts/utils/variable.js'
import Api from '../scripts/components/Api.js';
import PopupConfirm from '../scripts/components/PopupConfirm';
const cardId = '9f74472d3c56ce680bd34356';
//попап увеличенной картинки
const popupBigpicNew = new PopupWithImage('.popup-bigpic') //создаём попап с картинкой
popupBigpicNew.setEventListeners()//активируем слушатели
//попап удаления
const popupDelete = new PopupConfirm({popupSelector: '.popup-delete'})//создаём попап удаления
popupDelete.setEventListeners()//включаем его слушатели
//попап изменения аватара
const popupAvatar = new PopupWithForm({//создаём попап изменения аватара
  popupSelector: '.popup-avatar', //селектор попапа
  submitCallBack: (data) => { //обработчик сабмита, принимающий данные из ГетИнпутВалюес
    popupAvatar.loading(true);//изменяем состояние кнопки на Загрузку
    api.editAvatar(data)//отправляем на Апи данные нового аватара 
    .then((res) => {//получаем объект пользователя
      console.log(res)//проверяем в консоли
      user.setUserInfo(res)//устанавливаем новые данные в юзера через метод сетюзенинфо и данные (рез)
      popupAvatar.close();//закрываем попап аватара
    })}})
popupAvatar.setEventListeners()//включаем его слушатели
//попап данных профиля
const profilePopup = new PopupWithForm({//создаем попап редактирования данных профиля
    popupSelector: '.popup-profile', //селектор попапа
    submitCallBack: (data) => { //обработчик сабмита, принимающий данные ДАТА из ГетИнпутВалюес
    profilePopup.loading(true);//изменяем состояние кнопки на Загрузку
     api.editUserInfo(data)//отправляем на Апи новые данные
     .then((res) => {//получаем объект пользователя
       console.log(res)//проверяем
       user.setUserInfo(res);//устанавливаем через метод СетЮзерИнфо
       profilePopup.close()//закрываем попап
     })
     .catch((err) => {//ловим ошибку
       console.log(`Error: ${err}`)
     })}})
profilePopup.setEventListeners()//активируем  слушатели попапа
//попап добавления новой карточки
const popupPost = new PopupWithForm({//создаэём попап добавления новой карточки
  popupSelector: '.popup-post',//селектор попапа
  submitCallBack: (data) => {//передаем через сабмит дату формы из ГетИнпутВалюус
  popupPost.loading(true);//статус загрузки кнопки
  api.addCard(data)//отправляем на сервер методом аддкард данные
  .then((res) => {//получаем объект карточки
    console.log(res)//проверяем
    elementList.addItem(createCard(res)) //добавляем новую карточку в список карточек
    popupPost.close() //закрываем попап
  })
  .catch((err) => {//ловим ошибку
    console.log("ошибочка вышла")
  })}})
popupPost.setEventListeners()//активируем слушатели попапа
  //выгрузка всех карточек
const elementList = new Section({ //создаем список карточек
  renderer: (item) => { //через метод рендерер класса Секшн передаем массив объектов items
  elementList.addItem(createCard(item)); //каждую новую карточку добавляем в этот список
} }, elementListSelector); //селектор списка элементов
//валидация формы редактирования
const formEditProfileValidator = new FormValidator(config, formEditProfile)// создаем валидацию редактирования профиля
formEditProfileValidator.enableValidation()//запускаем валидацию в нём
//валидация формы добавления
const formAddCardValidator = new FormValidator(config, formAddCard)//создаём валидацию добавления новой карточки
formAddCardValidator.enableValidation()//также запускаем валидацию, за которую отвечает метод энэйблВалидэйшн
//валидация формы аватара
const formEditAvatarValidator = new FormValidator(config, formEditAvatar)//создаём валидацию добавления нового аватара
formEditAvatarValidator.enableValidation()//запускаем валидацию
//экземпляр пользователя
const user = new UserInfo({//создаём экземпляр профиля
  userName: '.profile__name',//юзернейм
  userInfo: '.profile__rank', //юзеринфо
  avatar: '.profile__avatar'}); //аватар селектор
let userName;//вводим переменную юзерНейм
//заводим Апи
const api = new Api({ //создаём Апи
  host: "https://mesto.nomoreparties.co/v1/cohort-47/",//подключаем хост
  token: "dfd0d591-2c36-49ee-a6dc-331afeedf1bc",//токен мой
  'Content-Type': 'application/json'//тип данных
});
//устанавливаем данные профиля
api.getUserInfo()//вызываем метод получения данных профиля
.then((userData) => {//обрабатываем результат юзерДата
 // console.log(userData)//проверяем его в консоли
  user.setUserInfo(userData);//устанавливаем в поля данные из Апи методом сетЮзерИнфо
  userName = userData.name;//присваиваем айди переменной юзерНейм
 // console.log(userName)//проверяем
})
.catch((err) => {//ловим ошибку
  console.log("Ошибочка вышла")
});
//выгружаем карточки с сервера
api.getCards()//вызываем метод получаения карточек
.then((items) => {//обрабатываем массив карточек
//console.log(items)
  elementList.setCards(items); //получаем карточки методом сетКардс, который сейчас создадим в сектион
elementList.renderElements(); //выгружаем карточки
})
//обработчики кнопок
buttonEdit.addEventListener('click', function() {//при нажамитии на кнопку "редактировать"
        const data = user.getUserInfo();//заводим дату, которая получает в себя данные методом гетЮзерИнфо
        popupName.value = data.username;//устанавливаем в строку имени имя пользователя
        popupRank.value = data.info;//а в инфо о себе графу о себе
        profilePopup.open()//открываем попап для редактирования
    }) 
buttonAddElement.addEventListener('click', function() {//при нажатии на кнопку "добавить"
        formAddCardValidator.disableSubmitButton()//делаем неактивной кнопку отправить
        popupPost.open()//открываем попап новой карточки
    })
editAvatarButton.addEventListener('click', () => {//при нажатии на кнопку редактировать аватар
  popupAvatar.open()//открываем соттветствующий аватар
    })
export default function deleteCard(data) {//функция удаления карточки
  api.deleteCard(data)//через метод делет кард Апи мы принимаем дату(айди карточки) и удаляем элемент
  .then((res) => {
    //card.deleteCard(cardId)
  })
  .catch(err => console.log("Ошибочка вышла"))//ловим ошибку
} 
function createCard (data) {//функция создания новой карточки
      const card = new Card({//создаём экземпляр карточки
        config, data, userName,//передаем необходимые данные
      handleCardClick: (name,link) => {//потом функцию-колбэк, принимающую в себя имя и адрес картинки
        popupBigpicNew.open(name, link)//открываем  увеличенный картинка
      }, 
      selectorTemplate: '.element-template', //селектор карточки
      handleDeleteIconClick: (data) => {//колбэк кнопки удалить на карточке
        console.log(data)//проверяем и получаем верный кардАйди
        popupDelete.open();//открываем попап удаления
        formDeleteCard.addEventListener('click', () => {//при нажатии на кнопку подтвердить
          deleteCard(data)//вызываем функцию удаления и передаем ей АЙДИ КАРТОЧКИ
          popupDelete.close()//попап закрывается
        })},
        handleSetLike: (data) => {//обработчик нажатия лайка которому мы передаем кардАйди
          console.log(data)//проверяем. это он
          api.setLikeCard(data)//вызываем метод сетлайккард у Апи
          .then((data) => {//получаем результат объект
            console.log(data)//смотрим и видим количество лайков
            card.likeCard(data);//непосредственно ставим лайк методом лайккард класса кард
          })
          .catch((err) => {//ловим ошибку
            console.log(`Ошибка: ${err}`);
          })},
          handleRemoveLike: (data) => {//обработчик нажатия лайка и отмены лайка
          //  console.log(data)
            api.removeLikeCard(data)//убираем лайк методом
            .then((data) => {//результат
              console.log(data)
              card.likeCard(data)// убираем лайк
            })
            .catch((err) => {//ловим ошибку
              console.log(`Ошибка: ${err}`);
            })
          }
      })
      const cardElement = card.generateCard();//создаем элемент карточки методом генерэйтКард
      return cardElement//возвращаем его
      
      }//карточка создана!