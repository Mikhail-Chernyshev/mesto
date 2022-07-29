const initialCards = [{
    name: 'Hurts',
    link: 'https://avatars.yandex.net/get-music-content/63210/5d49936a.a.2990574-1/m1000x1000?webp=false'
  },
  {
    name: 'One Republic',
    link: 'https://avatars.yandex.net/get-music-content/2357076/42fadbb9.a.10774796-3/m1000x1000?webp=false'
  },
  {
    name: 'Nirvana',
    link: 'https://i.pinimg.com/originals/ce/0b/fe/ce0bfe254a75d878f90481fe9337f773.jpg'
  },
  {
    name: 'Paul McCartney',
    link: 'https://kartinkin.net/uploads/posts/2021-01/1611849636_1-p-foni-dlya-oblozhek-albomov-1.jpg'
  },
  {
    name: 'Scorpion',
    link: 'https://lastfm.freetls.fastly.net/i/u/ar0/5ffb845d9d55dcb5f84e22601708d24a.jpg'
  },
  {
    name: 'Pink Floyd',
    link: 'https://cdn.fishki.net/upload/post/201402/28/1247616/d3f727438bc98aedc0053543bb16e823.jpg'
  }
  ];
  const config = {
      formSelector: '.popup__data',
      inputSelector: '.popup__input',
      submitButtonSelector: '.popup__delivery',
      inactiveButtonClass: 'popup__delivery_inactive',
      popupInputError: '.popup__input-error',
      inputErrorClass: 'popup__input_type_error',
      errorClass: 'popup__input-error_active',
      templateItem: '.element-template',
      cardButtonDelete: '.element__trash',
      cardButtonLike: '.element__like',
      cardButtonLikeActive: 'element__like_active',
      cardList: '.elements',
      cardTextItem: '.element__title',
      cardImageItem: '.element__image',
      cardPopup: '.popup-bigpic',
      cardPopupImage: '.popup-bigpic__pic',
      cardPopupTitle: '.popup-bigpic__title',
      addCardForm: '.popup-post__data',
  }
  const elementListSelector = ('.elements')
  const buttonEdit = document.querySelector('.profile__button-ed-self')
  const elementTemplate = document.querySelector('.element-template')
  const buttonClosePopup = document.querySelector('.popup-profile__close')
  const popupName = document.querySelector('.popup__input_data_name')
  const popupRank = document.querySelector('.popup__input_data_rank')
  const formEditProfile = document.querySelector('.popup__data_one')
  const formAddCard = document.querySelector('.popup-post__data')
  const buttonAddElement = document.querySelector('.profile__button-add-self')
  const popupPostName = document.querySelector('.popup-post__input_data_name')
const popupPostRank = document.querySelector('.popup-post__input_data_rank')
export {initialCards, config, elementListSelector, buttonEdit,elementTemplate, buttonClosePopup, popupName, popupRank, formEditProfile, formAddCard,buttonAddElement, popupPostName, popupPostRank};