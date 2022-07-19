
class Card {
   constructor(config, name, link, handleCardClick, elementTemplate){
         this._config = config;
         this._name = name;
         this._link = link;
         this._template = elementTemplate;
         this._popupBigpicImage = document.querySelector('.popup-bigpic__pic')
         this._popupBigpicTitle = document.querySelector('.popup-bigpic__title')
         this._popupBigpic = document.querySelector('.popup-bigpic')  
         this._handleCardClick = handleCardClick;
     }
     _getTemplate() {
        const cardElement = this._template
        .content
        .children[0]
        .cloneNode(true);
        return cardElement
    }
     generateCard() {
         this._element = this._getTemplate();
         this._likeButton = this._element.querySelector(this._config.cardButtonLike)
         this._cardImage = this._element.querySelector('.element__image')
         this._setEventListeners();
         this._cardImage.src = this._link;
         this._cardImage.alt = this._link;
         this._element.querySelector('.element__title').textContent = this._name;
        return this._element;
     }
    getElement() {
        return this._element;
    }
    _likeCard(evt) {
        evt.preventDefault()
        this._likeButton.classList.toggle(this._config.cardButtonLikeActive)
    }
    _deleteCard(evt) {
        evt.preventDefault()
        this._element.remove()
    } 
    // _handleOpenPopup() {
    //      this._popupBigpicImage.src = this._link; //у меня стоит передача тайтла в альт картинки, при проблеме с загрузкой появляется именно этот текст
    //     this._popupBigpicImage.alt = this._name
    //     this._popupBigpicTitle.textContent = this._name;
    //   }
    _setEventListeners() {     
        
        this._element.querySelector(this._config.cardButtonDelete)
        .addEventListener('click', (evt) =>  {
            this._deleteCard(evt)
        })
        this._element.querySelector(this._config.cardButtonLike)
        .addEventListener('click', (evt) =>  {
            this._likeCard(evt)
        })
        this._cardImage.addEventListener('click', () => { 
            this._handleCardClick(this._name, this._link)
        });
    }
 }
export default Card;