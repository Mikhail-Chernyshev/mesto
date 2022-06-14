const editButton = document.querySelector('.profile__button-ed-self')
const popup = document.querySelector('.popup')
const closePopupButton = document.querySelector('.popup__close')
const profileTitle = document.querySelector('.profile__name')
const profileRank = document.querySelector('.profile__rank')
const popupName = document.querySelector('.popup__input_data_name')
const popupRank = document.querySelector('.popup__input_data_rank')
const formElement = document.querySelector('.popup__data')
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
// profileTitle.textContent = popupName.value;
// profileRank.textContent = popupRank.value;
})
formElement.addEventListener('submit', function() {
    event.preventDefault()
    profileTitle.textContent = popupName.value;
    profileRank.textContent = popupRank.value;
    closePopup(popup)
})
// начиная с этого места мы делаем форму добавления объектов на страницу с именами из массива
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
function render() {
    elementContent.forEach(renderElement);
    }
function renderElement({name, link}) {
        const elementData = elementTemplate.querySelector('.element').cloneNode(true);
        const buttonLike = elementData.querySelectorAll('.element__like')
buttonLike.forEach(buttonLike =>
    buttonLike.addEventListener('click', function() {
      buttonLike.classList.toggle('element__like_active')
    }));
        elementData.querySelector('.element__image').src = link;
        elementData.querySelector('.element__title').textContent = name;
        elements.prepend(elementData); 
        const deleteButton = elementData.querySelector('.element__trash')
        deleteButton.addEventListener('click', function() {//РЕАЛИЗОВАЛ УДАЛЕНИЕ КАРТОЧКИ!!!!!
        elementData.remove()
})
    }
render();
//function deleteElement (elementContent) {
//elementContent.querySelector('.element__trash').addEventListener('click', e => {
  //  const renderElement = e.currentTarget.parentElement
    //elementTemplate.remove()
//})
//}
//делаем так чтобы элемент добавлялся в разметку
//пока что я добился того, что новая карточка добавляется на страницу
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
buttonDelivery.addEventListener('click', elementSubmit)
// делаем лайк активным
const buttonLike = document.querySelectorAll('.element__like')
buttonLike.forEach(buttonLike =>
    buttonLike.addEventListener('click', function() {
      buttonLike.classList.toggle('element__like_active')
    }));
// создаем кнопку добавления нового контента
const addButton = document.querySelector('.profile__button-add-self')
const closePopupPostButton = document.querySelector('.popup-post__close')
const popupPost = document.querySelector('.popup-post')
const popupPostName = document.querySelector('.popup-post__input_data_name')
const popupPostRank = document.querySelector('.popup-post__input_data_rank')

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
// делаем кнопку удаления элемента
