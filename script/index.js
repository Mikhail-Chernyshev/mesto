//переменные
const editButton = document.querySelector('.profile__button-ed-self')
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
const elementData = elementTemplate.querySelector('.element')
const buttonDelivery = document.querySelector('.popup-post__delivery')
const elementTitle = elementTemplate.querySelector('.element__title')
const popupBigpicTitle = document.querySelector('.popup-bigpic__title')
const popupBigpicImage = document.querySelector('.popup-bigpic__pic')
const elementSubmit = e => {
    const card = {}
    e.preventDefault()
    card.name = titleElement.value //вставил текст!!!!
    card.link = linkElement.value //Я НЕ ЗНАЮ КАК НО ВСЕ ЗАРАБОТАЛО
    renderElement(card)
    closePopup(popupPost)
}
console.log(elementSubmit)
const buttonsLike = document.querySelectorAll('.element__like')
const addButton = document.querySelector('.profile__button-add-self')
const closePopupPostButton = document.querySelector('.popup-post__close')
const popupPost = document.querySelector('.popup-post')
const popupPostName = document.querySelector('.popup-post__input_data_name')
const popupPostRank = document.querySelector('.popup-post__input_data_rank')
const popupBigpic = document.querySelector('.popup-bigpic')
const popupBigpicClose = document.querySelector('.popup-bigpic__close')
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
        const card = {}
        e.preventDefault()
        card.name = titleElement.value //вставил текст!!!!
        card.link = linkElement.value //Я НЕ ЗНАЮ КАК НО ВСЕ ЗАРАБОТАЛО
        renderElement(card)
        closePopup(popupPost)
    })
    // начиная с этого места мы делаем форму добавления объектов на страницу с именами из массива
function render() {
    elementContent.forEach(renderElement);
}

function renderElement(card) {
    const elementData = elementTemplate.querySelector('.element').cloneNode(true);
    const buttonLike = elementData.querySelector('.element__like')
    const buttonsPopupBigpic = elementData.querySelector('.element__image')
    const deleteButton = elementData.querySelector('.element__trash')

    buttonLike.addEventListener('click', function() {
        buttonLike.classList.toggle('element__like_active')
    });

    function openPopupBigpic(event) {
        popupBigpicImage.src = card.link; //у меня стоит передача тайтла в альт картинки, при проблеме с загрузкой появляется именно этот текст
        popupBigpicTitle.textContent = card.name;
        openPopup(popupBigpic)
    }
    buttonsPopupBigpic.addEventListener('click', function() {
        openPopupBigpic(popupBigpic)
    })

    deleteButton.addEventListener('click', function() { //РЕАЛИЗОВАЛ УДАЛЕНИЕ КАРТОЧКИ!!!!!
        elementData.remove()
    })

    function createCard(item) {
        buttonsPopupBigpic.src = card.link;
        elementTitle.textContent = card.name;
        buttonsPopupBigpic.alt = card.name;
        elements.prepend(elementData)
        return item
    }
    createCard(card)
        // elementData.querySelector('.element__image').src = card.link;
        // elementData.querySelector('.element__title').textContent = card.name;
        //elementData.querySelector('.element__image').alt = card.name;//alt = name image
        //elements.prepend(elementData);
}

render();
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
    //теперь надо бы открыть его