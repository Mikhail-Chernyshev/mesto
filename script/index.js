//переменные
const editButton = document.querySelector('.profile__button-ed-self')
const popupOverlay = document.querySelector('.popup')
const popupPostOverlay = document.querySelector('.popup-post')
const popupBigpicOverlay = document.querySelector('.popup-bigpic')
const profilePopup = document.querySelector('.popup-profile')
const closePopupButton = document.querySelector('.popup-profile__close')
const profileTitle = document.querySelector('.profile__name')
const profileRank = document.querySelector('.profile__rank')
const popupName = document.querySelector('.popup__input_data_name')
const popupRank = document.querySelector('.popup__input_data_rank')
const formEditProfile = document.querySelector('.popup__data_one')
const formAddCard = document.querySelector('.popup-post__data')
const elements = document.querySelector('.elements')
const elementTemplate = document.querySelector('.element-template').content
const elementContent = initialCards.map(function(item) {
    return { name: item.name, link: item.link };
});
const titleElement = document.querySelector('.popup-post__input_data_name')
const linkElement = document.querySelector('.popup-post__input_data_rank')
const buttonDelivery = document.querySelector('.popup-post__delivery')
const elementTitle = elementTemplate.querySelector('.element__title')
const popupBigpicTitle = document.querySelector('.popup-bigpic__title')
const popupBigpicImage = document.querySelector('.popup-bigpic__pic')
const addButton = document.querySelector('.profile__button-add-self')
const closePopupPostButton = document.querySelector('.popup-post__close')
const popupPost = document.querySelector('.popup-post')
const popupPostName = document.querySelector('.popup-post__input_data_name')
const popupPostRank = document.querySelector('.popup-post__input_data_rank')
const popupBigpic = document.querySelector('.popup-bigpic')
const popupBigpicClose = document.querySelector('.popup-bigpic__close')
const elementData = elementTemplate.querySelector('.element')
    //функционал открытия попапа и добавления контента в строки ввода
function openPopup(popup) {
    popup.classList.add('popup_opened')
    document.addEventListener('keydown', closeByEscPress)
}
function closeByEscPress(evt) {
    if (evt.key === 'Escape') {
        const popupList = Array.from(document.querySelectorAll('.popup'))
        popupList.forEach((popupElement) => {
       // closePopup(popupBigpic)
        //closePopup(popupPost)
        //closePopup(profilePopup)
        closePopup(popupElement)
    }
)}
}
function closePopup(popup) {
    popup.classList.remove('popup_opened')
    document.removeEventListener('keydown', closeByEscPress)
}
editButton.addEventListener('click', function() {
        openPopup(profilePopup)
        popupName.value = profileTitle.textContent;
        popupRank.value = profileRank.textContent;
    }) 
closePopupButton.addEventListener('click', function() {
        closePopup(profilePopup)
    }) 
formEditProfile.addEventListener('submit', function(e) {
        e.preventDefault()
        profileTitle.textContent = popupName.value;
        profileRank.textContent = popupRank.value;
        closePopup(profilePopup)
    }) 
formAddCard.addEventListener('submit', function(e) {
        e.preventDefault()
        const cardData = {name: titleElement.value , link: linkElement.value }
        addElement(cardData)
        closePopup(popupPost)
        disableSubmitButton(buttonDelivery)
    })
    // начиная с этого места мы делаем форму добавления объектов на страницу с именами из массива
function render() {
    elementContent.forEach(addElement);
}
function createCard(card) {
    const elementData = elementTemplate.querySelector('.element').cloneNode(true)
    const buttonLike = elementData.querySelector('.element__like')
    const cardImage = elementData.querySelector('.element__image')
    const deleteButton = elementData.querySelector('.element__trash')

    cardImage.src = card.link;
    cardImage.alt = card.name;
    elementData.querySelector('.element__title').textContent = card.name;

    cardImage.addEventListener('click', function() {
        openPopupBigpic(card)
    })
    buttonLike.addEventListener('click', function() {
        buttonLike.classList.toggle('element__like_active')
    });
    deleteButton.addEventListener('click', function() { 
        elementData.remove()
    })
    return elementData
}
function addElement(elementData) {
    const elementCard = createCard(elementData);
    elements.prepend(elementCard);
}
function openPopupBigpic(card) {
    popupBigpicImage.src = card.link; //у меня стоит передача тайтла в альт картинки, при проблеме с загрузкой появляется именно этот текст
    popupBigpicImage.alt = card.name
    popupBigpicTitle.textContent = card.name;
    openPopup(popupBigpic)
}
render()
    // создаем кнопку добавления нового контента
addButton.addEventListener('click', function() {
        openPopup(popupPost)
        popupPostName.value = null;
        popupPostRank.value = null;
    })
    //функция выше открывает попап с пустыми полями даже после ввода данных
    // делаем попап картинок
closePopupPostButton.addEventListener('click', function() {
        closePopup(popupPost)
    })
    //сделаем так, чтобы попап закрывался
popupBigpicClose.addEventListener('click', function() {
        closePopup(popupBigpic)
    })
    //ниже мы настраиваем закрытие попапа по клику ну оверлэй
document.addEventListener('click', (e) => {
        if (e.target === popupOverlay) {
            closePopup(profilePopup)
        }
    }) 
document.addEventListener('click', (e) => {
        if (e.target === popupPostOverlay) {
            closePopup(popupPost)
        }
    }) 
document.addEventListener('click', (e) => {
        if (e.target === popupBigpicOverlay) {
            closePopup(popupBigpic)
        }
    })
