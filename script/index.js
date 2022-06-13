const editButton = document.querySelector('.profile__button-ed-self')
const popup = document.querySelector('.popup')
const closePopupButton = document.querySelector('.popup__close')

const profileTitle = document.querySelector('.profile__name')
const profileRank = document.querySelector('.profile__rank')
const popupName = document.querySelector('.popup__input_data_name')
const popupRank = document.querySelector('.popup__input_data_rank')
const formElement = document.querySelector('.popup__data')

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