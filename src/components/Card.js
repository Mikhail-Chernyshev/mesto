import { popupDelete } from "../utils/variable.js";
class Card {
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
    this._config = config;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._userId = userId;
    this._ownerName = data.owner.name;
    this._template = document.querySelector(selectorTemplate);
    this._handleCardClick = handleCardClick;
    this._cardId = data._id;
    this._myId = userId;
    this._userId = data.owner._id;
    this._handleSetLike = handleSetLike;
    this._handleDeleteIconClick = handleDeleteIconClick;
    this._handleRemoveLike = handleRemoveLike;
  }
  _getTemplate() {
    const cardElement = this._template.content
      .querySelector(".element")
      .cloneNode(true);
    return cardElement;
  }
  generateCard() {
    this._element = this._getTemplate();
    this._deleteButton = this._element.querySelector(
      this._config.cardButtonDelete
    );
    this._likeButton = this._element.querySelector(this._config.cardButtonLike);
    this._cardImage = this._element.querySelector(".element__image");
    this._setEventListeners();
    this._likesAll = this._element.querySelector(".element__score");
    this._likesAll.textContent = this._likes.length;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this.stayCountEmpty();
    this._checkDeleteButton();
    this._element.querySelector(".element__title").textContent = this._name;
    return this._element;
  }
  likeCard(data) {
    this._likes = data.likes;
    this._likesAll.textContent = this._likes.length;
    this._likeButton.classList.toggle(this._config.cardButtonLikeActive);
  }
  stayCountEmpty() {
    if (this._likes.length === 0) {
      this._likesAll.textContent = "";
    }
  }
  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._deleteButton.addEventListener("click", (evt) => {
      this._handleDeleteIconClick(this._cardId);
    });
    this._likeButton.addEventListener("click", () => {
      if (this._likeButton.classList.contains("element__like_active")) {
        this._handleRemoveLike(this._cardId);
      } else {
        this._handleSetLike(this._cardId);
      }
    });

    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }
  _checkDeleteButton() {
    if (this._myId !== this._userId) {
      this._deleteButton.remove();
    }
  }
}
export default Card;
