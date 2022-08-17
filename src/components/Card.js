import { popupDelete } from "../utils/variable.js";
class Card {
  //создаем класс кард
  constructor({
    config,
    data,
    userId,
    handleCardClick,
    selectorTemplate,
    handleDeleteIconClick,
    handleSetLike,
    handleRemoveLike,
  }) {
    this._config = config; //конфиг передаём
    this._name = data.name; //имя карточки
    this._link = data.link; //ссылка на картинку
    this._likes = data.likes; //калочиество лайков карточки
    this._userId = userId; //имя пользователя(моё)
    this._ownerName = data.owner.name; //имя автора карточки
    this._template = document.querySelector(selectorTemplate); //темплэйт карточки
    this._handleCardClick = handleCardClick; //функция колбэк клика по карточке
    this._cardId = data._id; //айдикарточки
    this._myId = userId;
    this._userId = data.owner._id; //айди пользователя
    this._handleSetLike = handleSetLike; //функция колбэк установки лайка
    this._handleDeleteIconClick = handleDeleteIconClick; //функция колбэк нажатия по корзине
    this._handleRemoveLike = handleRemoveLike; //функция колбэк снятия лайка
  }
  _getTemplate() {
    //получаем темплэйт карточки
    const cardElement = this._template.content //через темплэйт
      .querySelector(".element") //ищем контент
      .cloneNode(true); //делаем глубокое копирование всех внутренних элементов
    return cardElement; //возврвращем элемент как итог работы функции
  }
  generateCard() {
    this._element = this._getTemplate(); //устанавливаем элемент
    this._deleteButton = this._element.querySelector(
      this._config.cardButtonDelete
    ); //кнопка корзинка
    this._likeButton = this._element.querySelector(this._config.cardButtonLike); //кнопка лайка
    this._cardImage = this._element.querySelector(".element__image"); //само изображние в карточке
    this._setEventListeners(); //включаем слушатели
    this._likesAll = this._element.querySelector(".element__score");
    this._likesAll.textContent = this._likes.length;
    this._cardImage.src = this._link; //ccылка на картинку
    this._cardImage.alt = this._name; //описание картинки
    this.stayCountEmpty()
    this._checkDeleteButton(); //этот метод делает так, чтобы кнопка удаления была только на моих карточках
    this._element.querySelector(".element__title").textContent = this._name; //название карточки = имени
    return this._element; //возвращаем элемент как итог функции
  }
  likeCard(data) {
    this._likes = data.likes;
    this._likesAll.textContent = this._likes.length;
    this._likeButton.classList.toggle(this._config.cardButtonLikeActive);
  }
  stayCountEmpty() {
    if (this._likes.length === 0) {
      this._likesAll.textContent = ''
    }
  }
  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    //обработчики
    this._deleteButton.addEventListener("click", (evt) => {
      //при нажатии на кнопку корзины
      this._handleDeleteIconClick(this._cardId); //вызываем метод открытия попапа для подтверждения удаления
    });
    this._likeButton.addEventListener("click", () => {
      //при нажатии на лайк
      if (this._likeButton.classList.contains("element__like_active")) {
        //если уже стоит лайк
        this._handleRemoveLike(this._cardId); //то убираем его
      } else {
        //в противном случае
        this._handleSetLike(this._cardId); //устанавливаем лайк
      }
    });

    this._cardImage.addEventListener("click", () => {
      //при нажатии на картинку
      this._handleCardClick(this._name, this._link); //вызываем метод открытия увеличенного изображения
    });
  }
  _checkDeleteButton() {
    //убираем кнопку корзинки у карточек созданных не нами
    if (this._myId !== this._userId) {
      //если наше имя не равно имени создателя карточки
      this._deleteButton.remove(); //кнопку удаляем
    }
  }
}
export default Card;
