//переменные
const editButton = document.querySelector('.profile__button-ed-self')
const popup = document.querySelector('.popup')
const closePopupButton = document.querySelector('.popup__close')
const profileTitle = document.querySelector('.profile__name')
const profileRank = document.querySelector('.profile__rank')
const popupName = document.querySelector('.popup__input_data_name')
const popupRank = document.querySelector('.popup__input_data_rank')
const formElement = document.querySelector('.popup__data')
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
const elements = document.querySelector('.elements')
const elementTemplate = document.querySelector('.element-template').content
const elementContent = initialCards.map(function (item) {
return { name: item.name, link: item.link };
});
const titleElement = document.querySelector('.popup-post__input_data_name')
const linkElement = document.querySelector('.popup-post__input_data_rank')
const form = document.querySelector('.popup-post__data')
const elementData = elementTemplate.querySelector('.element')
const buttonDelivery = document.querySelector('.popup-post__delivery')
let elementTitle = elementTemplate.querySelector('.element__title')
const elementSubmit = e => {
    e.preventDefault()
    name = titleElement.value //вставил текст!!!!
    link = linkElement.value//Я НЕ ЗНАЮ КАК НО ВСЕ ЗАРАБОТАЛО
    renderElement({name, link})
    closePopupPost(popupPost)
}
const buttonsLike = document.querySelectorAll('.element__like')
const addButton = document.querySelector('.profile__button-add-self')
const closePopupPostButton = document.querySelector('.popup-post__close')
const popupPost = document.querySelector('.popup-post')
const popupPostName = document.querySelector('.popup-post__input_data_name')
const popupPostRank = document.querySelector('.popup-post__input_data_rank')
//функционал открытия попапа и добавления контента в строки ввода
function openPopup(popup) {
    popup.classList.add('popup_opened')
}
function closePopup(popup) {
    popup.classList.remove('popup_opened')
}
editButton.addEventListener('click', function() {
    openPopup(popup)
    popupName.value = profileTitle.textContent;
    popupRank.value = profileRank.textContent;
})
closePopupButton.addEventListener('click', function() {
  closePopup(popup)
})
formElement.addEventListener('submit', function() {
    event.preventDefault()
    profileTitle.textContent = popupName.value;
    profileRank.textContent = popupRank.value;
    closePopup(popup)
})
// начиная с этого места мы делаем форму добавления объектов на страницу с именами из массива
function render() {
    elementContent.forEach(renderElement);
    }
function renderElement({name, link}) {
        const elementData = elementTemplate.querySelector('.element').cloneNode(true);
        const buttonLike = elementData.querySelectorAll('.element__like')
        const buttonsPopupBigpic = elementData.querySelectorAll('.element__image')
        buttonLike.forEach(buttonLike =>
        buttonLike.addEventListener('click', function() {
        buttonLike.classList.toggle('element__like_active')
    }));
    function openPopupBigpic (event) {
      popupBigpic.querySelector('.popup-bigpic__pic').src = elementData.querySelector('.element__image').src;
      popupBigpic.querySelector('.popup-bigpic__title').textContent = elementData.querySelector('.element__title').textContent;
      popupBigpic.classList.add('popup_opened')
    }
   buttonsPopupBigpic.forEach(buttonsPopupBigpic => 
     buttonsPopupBigpic.addEventListener('click', function()  {
       openPopupBigpic(popupBigpic)
    }))
        elementData.querySelector('.element__image').src = link;
        elementData.querySelector('.element__title').textContent = name;
        elementData.querySelector('.element__image').alt = name;//alt = name image
        elements.prepend(elementData); 
        const deleteButton = elementData.querySelector('.element__trash')
        deleteButton.addEventListener('click', function() {//РЕАЛИЗОВАЛ УДАЛЕНИЕ КАРТОЧКИ!!!!!
        elementData.remove()
})
    }
render();
//делаем так чтобы элемент добавлялся в разметку
//пока что я добился того, что новая карточка добавляется на страницу
buttonDelivery.addEventListener('click', elementSubmit)
// делаем лайк активныM
buttonsLike.forEach(buttonLike =>
    buttonLike.addEventListener('click', function() {
      buttonLike.classList.toggle('.element__like_active')
    }));
// создаем кнопку добавления нового контента
addButton.addEventListener('click', function () {
    openPopupPost(popupPost)
    popupPostName.value = null;
    popupPostRank.value = null;
})
//функция выше открывает попап с пустыми полями даже после ввода данных
function openPopupPost(popupPost) {
    popupPost.classList.add('popup-post_opened')
}
function closePopupPost(popupPost) {
    popupPost.classList.remove('popup-post_opened')
}
closePopupPostButton.addEventListener('click', function () {
    closePopupPost(popupPost)
})
// делаем попап картинок
const popupBigpic = document.querySelector('.popup-bigpic')
const popupBigpicClose = document.querySelector('.popup-bigpic__close')
const popupBigpicImage = document.querySelector('.popup-bigpic__pic')
const popupBigpicTitle = document.querySelector('.popup-bigpic__title')
//сделаем так, чтобы попап закрывался
function closePopupBigpic () {
  popupBigpic.classList.remove('popup_opened')
}
popupBigpicClose.addEventListener('click', function() {
  closePopupBigpic(popupBigpic)
})
//теперь надо бы открыть его