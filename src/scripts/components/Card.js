class Card {
   constructor(config, name, link, handleCardClick, selectorTemplate){
         this._config = config;
         this._name = name;
         this._link = link;
         this._template = selectorTemplate;
         this._handleCardClick = handleCardClick;
     }
    //  _getTemplate() {
    //     const cardElement = this._template
    //     .content
    //     .children[0]
    //     .cloneNode(true);
    //     return cardElement
    // }
    _getTemplate() {
        const cardElement = this._template
          .content.querySelector('.element')
          .cloneNode(true);
        return cardElement;
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
        this._likeButton.classList.toggle(this._config.cardButtonLikeActive)
    }
    _deleteCard(evt) {
        this._element.remove()
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
        this._cardImage.addEventListener('click', () => { 
            this._handleCardClick(this._name, this._link)
        });
    }
 }
export default Card;