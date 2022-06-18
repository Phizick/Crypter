
const discoverList = document.getElementById('discoverList');
const discoverTemplate = document.querySelector('.discover__template').content;
const hotbidList = document.getElementById('hotbidList');


function renderCard(cardLink, cardSplash, cardName, cardAvatar, cardPrice, cardPriceInfo, cardCardBid) {
    discoverList.prepend(createNewCard(cardLink, cardSplash, cardName, cardAvatar, cardPrice, cardPriceInfo, cardCardBid));
}

discoverCards.forEach((item) => {
    renderCard(item.link, item.splash, item.name, item.avatar, item.price, item.priceInfo, item.cardBid);
})



function createNewCard(cardLink, cardSplash, cardName, cardAvatar, cardPrice, cardPriceInfo, cardCardBid) {
    
    const card = discoverTemplate.querySelector(".hotbid__list-item").cloneNode(true);
    const image = card.querySelector(".hotbid__card-img");
    const splash = card.querySelector('.hotbid__card-splash');
    const avatar = card.querySelector('.hotbid__container-img');
    const price = card.querySelector('.hotbid__bid-span');
    const priceInfo = card.querySelector('.hotbid__card-items-info');
    const bid = card.querySelector('.hotbid__span');
    const name = card.querySelector('.hotbid__container-name');
    image.src = cardLink;
    image.alt = cardName;     
    splash.textContent = cardSplash; 
    avatar.src = cardAvatar;
    price.textContent = cardPrice;
    priceInfo.textContent = cardPriceInfo;
    bid.textContent = cardCardBid;
    name.textContent = cardName;   
    return card;
};

const hotbidCards = discoverCards.slice(0, 4);

hotbidCards.forEach((item) => {
    renderCardHotbid(item.link, item.splash, item.name, item.avatar, item.price, item.priceInfo, item.cardBid);
})

function renderCardHotbid(cardLink, cardSplash, cardName, cardAvatar, cardPrice, cardPriceInfo, cardCardBid) {
    hotbidList.prepend(createNewCard(cardLink, cardSplash, cardName, cardAvatar, cardPrice, cardPriceInfo, cardCardBid));
}

