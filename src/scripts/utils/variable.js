
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
      deleteCardPopup: '.popup-delete__content',
      likeScore: '.element__score'
  }
  const elementListSelector = ('.elements')
  const buttonEdit = document.querySelector('.profile__button-ed-self')
  const elementTemplate = document.querySelector('.element-template')
  const buttonClosePopup = document.querySelector('.popup-profile__close')
  const popupName = document.querySelector('.popup__input_data_name')
  const popupRank = document.querySelector('.popup__input_data_rank')
  const formEditProfile = document.querySelector('.popup__data_one')
  const formAddCard = document.querySelector('.popup-post__data')
  const formDeleteCard = document.querySelector('.popup-delete__delivery')
  const formEditAvatar = document.querySelector('.popup-avatar__data')
  const buttonAddElement = document.querySelector('.profile__button-add-self')
  const popupPostName = document.querySelector('.popup-post__input_data_name')
const popupPostRank = document.querySelector('.popup-post__input_data_rank')
const popupDeleteSelector = document.querySelector('.popup-delete')
const profileAvatar = document.querySelector('.profile__avatar')
const editAvatarButton = document.querySelector('.profile__button-edit')
export { config, elementListSelector, buttonEdit,elementTemplate, buttonClosePopup, popupName, popupRank, formEditProfile, formAddCard,buttonAddElement, popupPostName, popupPostRank, popupDeleteSelector, formDeleteCard, profileAvatar, editAvatarButton, formEditAvatar};