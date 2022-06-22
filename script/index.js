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
const formElement = document.querySelector('.popup__data')
const formElementPost = document.querySelector('.popup-post__data')
const initialCards = [{
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
const elementContent = initialCards.map(function(item) {
    return { name: item.name, link: item.link };
});
const titleElement = document.querySelector('.popup-post__input_data_name')
const linkElement = document.querySelector('.popup-post__input_data_rank')
const form = document.querySelector('.popup-post__data')
    //const elementData = elementTemplate.querySelector('.element')
const buttonDelivery = document.querySelector('.popup-post__delivery')
const elementTitle = elementTemplate.querySelector('.element__title')
const popupBigpicTitle = document.querySelector('.popup-bigpic__title')
const popupBigpicImage = document.querySelector('.popup-bigpic__pic')
const elementSubmit = e => {
        e.preventDefault()
        elementData.querySelector('.element__title').textContent = titleElement.value //вставил текст!!!!
        elementData.querySelector('.element__image').src = linkElement.value //Я НЕ ЗНАЮ КАК НО ВСЕ ЗАРАБОТАЛО
        renderElement(card)
        closePopup(popupPost)
    }
    //const buttonsLike = document.querySelectorAll('.element__like')
const addButton = document.querySelector('.profile__button-add-self')
const closePopupPostButton = document.querySelector('.popup-post__close')
const popupPost = document.querySelector('.popup-post')
const popupPostName = document.querySelector('.popup-post__input_data_name')
const popupPostRank = document.querySelector('.popup-post__input_data_rank')
const popupBigpic = document.querySelector('.popup-bigpic')
const popupBigpicClose = document.querySelector('.popup-bigpic__close')
const elementData = elementTemplate.querySelector('.element')
    //const buttonLike = elementData.querySelector('.element__like')
    //const buttonsPopupBigpic = elementData.querySelector('.element__image')
    //const deleteButton = elementData.querySelector('.element__trash')
    //функционал открытия попапа и добавления контента в строки ввода
function openPopup(popup) {
    popup.classList.add('popup_opened')
}

function closePopup(popup) {
    popup.classList.remove('popup_opened')
}
editButton.addEventListener('click', function() {
    openPopup(profilePopup)
    popupName.value = profileTitle.textContent;
    popupRank.value = profileRank.textContent;
})
closePopupButton.addEventListener('click', function() {
    closePopup(profilePopup)
})
formElement.addEventListener('submit', function() {
    event.preventDefault()
    profileTitle.textContent = popupName.value;
    profileRank.textContent = popupRank.value;
    closePopup(profilePopup)
})
formElementPost.addEventListener('submit', function(e) {
        e.preventDefault()
        elementData.name = titleElement.value //вставил текст!!!!
        elementData.link = linkElement.value //Я НЕ ЗНАЮ КАК НО ВСЕ ЗАРАБОТАЛО
        addElement(elementData)
        closePopup(popupPost)
    })
    // начиная с этого места мы делаем форму добавления объектов на страницу с именами из массива
function render() {
    elementContent.forEach(addElement);
}

function createCard(card) {
    const elementData = elementTemplate.querySelector('.element').cloneNode(true)
    const buttonLike = elementData.querySelector('.element__like')
    const buttonsPopupBigpic = elementData.querySelector('.element__image')
    const deleteButton = elementData.querySelector('.element__trash')

    elementData.querySelector('.element__image').src = card.link;
    elementData.querySelector('.element__image').alt = card.name;
    elementData.querySelector('.element__title').textContent = card.name;


    function openPopupBigpic(event) {
        popupBigpicImage.src = card.link; //у меня стоит передача тайтла в альт картинки, при проблеме с загрузкой появляется именно этот текст
        popupBigpicImage.alt = card.name
        popupBigpicTitle.textContent = card.name;
        openPopup(popupBigpic)
    }
    buttonsPopupBigpic.addEventListener('click', function() {
        openPopupBigpic(popupBigpic)
    })
    buttonLike.addEventListener('click', function() {
        buttonLike.classList.toggle('element__like_active')
    });
    deleteButton.addEventListener('click', function() { //РЕАЛИЗОВАЛ УДАЛЕНИЕ КАРТОЧКИ!!!!!
        elementData.remove()
    })
    return elementData
}

function addElement(elementData) {
    const elementCard = createCard(elementData);
    elements.prepend(elementCard);
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
    //escape закрытие попапа
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closePopup(profilePopup)
    }
});
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closePopup(popupPost)
    }
});
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closePopup(popupBigpic)
    }
});