class Card {
   constructor(config, name, link){
         this._config = config;
         this._name = name;
         this._link = link;
     }
     _getTemplate() {
        const cardElement = document.querySelector('.element-template')
        .content
        .children[0]
        .cloneNode(true);
        return cardElement
    }
     generateCard() {
         this._element = this._getTemplate();
         this._setEventListeners();
         this._element.querySelector('.element__image').src = this._link;
         this._element.querySelector('.element__image').alt = this._link;
         this._element.querySelector('.element__title').textContent = this._name;
        return this._element;
     }
    getElement() {
        return this._element;
    }
    _likeCard(evt) {
        evt.preventDefault()
        this._element.querySelector(this._config.cardButtonLike).classList.toggle(this._config.cardButtonLikeActive)
    }
    _deleteCard(evt) {
        evt.preventDefault()
        this._element.remove()
    } 
    _handleOpenPopup() {
        const popupBigpicImage = document.querySelector('.popup-bigpic__pic')
        const popupBigpicTitle = document.querySelector('.popup-bigpic__title')
        const popupBigpic = document.querySelector('.popup-bigpic')  
        popupBigpicImage.src = this._link; //у меня стоит передача тайтла в альт картинки, при проблеме с загрузкой появляется именно этот текст
        popupBigpicImage.alt = this._name
        popupBigpicTitle.textContent = this._name;
        popupBigpic.classList.add('popup_opened');
      }
    _setEventListeners() {     
        this._element.querySelector(this._config.cardButtonDelete)
        .addEventListener('click', (evt) =>  {
            this._deleteCard(evt)
        })
        this._element.querySelector(this._config.cardButtonLike)
        .addEventListener('click', (evt) =>  {
            this._likeCard(evt)
        })
        this._element.querySelector(this._config.cardImageItem).addEventListener('click', () => {
                this._handleOpenPopup();
              });
    }
 }
export default Card;