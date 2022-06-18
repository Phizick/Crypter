//объявляем переменные
const popupProfileForm = document.querySelector(".popup__form-profile");//форма профайла
const profileEdit = document.querySelector(".profile__name-edit"); //кнопка редактирования профиля
const popupProfile = document.querySelector(".popup__profile"); //попап профиля
const formProfileSaveBtn = document.querySelector(".popup__form-profile"); //сабмит профайла
const nameInput = popupProfileForm.querySelector(".popup__input_data_name"); //поле ввода имени профайла
const jobInput = popupProfileForm.querySelector(".popup__input_data_about"); //поле ввода инф профайла
const profileName = document.querySelector(".profile__name-text"); //заголовок профайла
const profileAbout = document.querySelector(".profile__bio"); //инф профайла
const buttonOpenPopupCard = document.querySelector(".profile__add-button"); //кнопка добавления карточки
const popupAddCard = document.querySelector(".popup__img"); //форма добавления карточки
const imgLinkInput = popupAddCard.querySelector(".popup__input_data_imgUrl"); //поле ввода ссылки на картинку в форме добавления карточки
const imgNameInput = popupAddCard.querySelector(".popup__input_data_imgName"); //поле ввода имени картинки в форме добавления карточки
const closeBtns = document.querySelectorAll(".popup__close-button"); //кнопка закрытия модальных окон
const galleryList = document.querySelector(".gallery__grid"); //список карточек
const galleryTemplate = document.querySelector(".gallery__template").content; //шаблон для добавления карточек в разметку
const popupOpenedImg = document.querySelector(".popup__img-opened"); //попап карточки в полный размер картинки

const carouselCards = [
    {
        name: "Edd Ruby",
        price: "2.456 ETH",
        avatar: "../../images/profile_1.png",
        value: "#1",
        award: "../../images/1st.svg",
    },
    {
        name: "Odell Rust",
        price: "0.653 ETH",
        avatar: "../../images/profile_1.png",
        value: "#1",
        award: "../../images/1st.svg",
    },
    {
        name: "Martlee Kotlin",
        price: "1.406 ETH",
        avatar: "../../images/profile_1.png",
        value: "#1",
        award: "../../images/1st.svg",
    },    
    {
        name: "Hane Pyton",
        price: "2.456 ETH",
        avatar: "../../images/profile_1.png",
        value: "#1",
        award: "../../images/1st.svg",
    },
    {
        name: "Kundle Java",
        price: "2.487 ETH",
        avatar: "../../images/profile_1.png",
        value: "#1",
        award: "../../images/1st.svg",
    },
    {
        name: "Tomas Swift",
        price: "4.956 ETH",
        avatar: "../../images/profile_1.png",
        value: "#1",
        award: "../../images/1st.svg",
    },    
    {
        name: "Gleb Pascal",
        price: "3.846 ETH",
        avatar: "../../images/profile_1.png",
        value: "#1",
        award: "../../images/1st.svg",
    },
];

const carousel = document.querySelector('.carousel__content');
const btnPrv = carousel.getElementsById('btn-carousel-prev');
const btnNext = carousel.getElementsById('btn-carousel-next');





//отрисовка карточки в контейнер
function renderCard(cardName, cardLink) {
    galleryList.prepend(createNewCard(cardName, cardLink));    
};

//перебор массива
initialCards.forEach((item) => {
    renderCard(item.name, item.link);
});

//создание новой карточки
function createNewCard(cardName, cardLink) {
    //создание контейнера под карточку и определение его значений
    const card = galleryTemplate.querySelector(".gallery__grid-item").cloneNode(true);
    const image = card.querySelector(".gallery__grid-image");
    image.src = cardLink;
    image.alt = cardName;
    card.querySelector(".gallery__grid-name").textContent = cardName;  
 
   
    return card;
};

//добавление новой карточки
popupAddCard.addEventListener("submit", (evt) => {
    evt.preventDefault();
    renderCard(imgNameInput.value, imgLinkInput.value);    
   
});