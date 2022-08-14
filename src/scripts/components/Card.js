import { popupDelete } from "../utils/variable.js";
class Card {
   constructor({config, data, userName, handleCardClick, selectorTemplate, handleDeleteIconClick, handleSetLike, handleRemoveLike}){
         this._config = config;//конфиг передаём
         this._name = data.name;//имя карточки
         this._link = data.link;//ссылка на картинку
         this._likes = data.likes;//калочиество лайков карточки
        //  this._likesAll = this._config.likeScore;//элемент-счетчик
         this._scoreLike = this._likes.length;//хуй знает
         this._userName = userName;//имя пользователя(моё)
         this._ownerName = data.owner.name//имя автора карточки
         this._template = document.querySelector(selectorTemplate);//темплэйт карточки
         this._handleCardClick = handleCardClick;//функция колбэк клика по карточке
         this._cardId = data._id;//айдикарточки
         this._userId = data.owner.id;//айди пользователя
         this._handleSetLike = handleSetLike//функция колбэк установки лайка
         this._handleDeleteIconClick = handleDeleteIconClick;//функция колбэк нажатия по корзине
         this._handleRemoveLike = handleRemoveLike;//функция колбэк снятия лайка
     }
    _getTemplate() {
        const cardElement = this._template
          .content.querySelector('.element')
          .cloneNode(true);
        return cardElement;
      }
     generateCard() {
         this._element = this._getTemplate();
         this._deleteButton = this._element.querySelector(this._config.cardButtonDelete)
         this._likeButton = this._element.querySelector(this._config.cardButtonLike)
         this._cardImage = this._element.querySelector('.element__image')
         this._setEventListeners();
         this._likesAll = this._config.likeScore;//элемент-счетчик
         this._cardImage.src = this._link;
         this._cardImage.alt = this._link;
         this._removeUserDelete();
         this._element.querySelector('.element__title').textContent = this._name;
       //console.log(this._userName)
       //console.log(this._ownerName)
        return this._element;
     }
    getElement() {
        return this._element;
    }
    likeCard() {
       // this._likesAll = this._element.querySelector('.element__score');
        this._likes = data.likes;
        this._likesAll.textContent = this._likes.length;
       // this._likesAll.textContent = this._scoreLike;
        this._likeButton.classList.toggle(this._config.cardButtonLikeActive)
    }

    deleteCard(cardId) {
        this._element.remove(cardId)
    } 

    _setEventListeners() {    
       
        this._deleteButton.addEventListener('click', (evt) =>  {
            this._handleDeleteIconClick(this._cardId)
        })
        this._likeButton.addEventListener('click', () =>  {
           if (this._likeButton.classList.contains('element__like_active')) {
               this._handleRemoveLike(this._cardId);
             
           } else {

            this._handleSetLike(this._cardId)
        }})

        this._cardImage.addEventListener('click', () => { 
            this._handleCardClick(this._name, this._link)
        });
    }
    _removeUserDelete() {
        if (this._userName !== this._ownerName) {
         this._deleteButton.remove();
        } 
      }
      _isCardLiked() {
        if (this._likes.some((user) => {
          return this._userId === user._id;
        })) {
          this._likeButton.classList.add('element__like_active');
        }
      }
 }
export default Card;