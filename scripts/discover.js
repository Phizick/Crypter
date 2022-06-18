
const discoverList = document.getElementById('discoverList');
const discoverTemplate = document.querySelector('.discover__template').content;
const hotbidList = document.getElementById('hotbidList');

function renderCard(cardLink, cardSplash, cardName, cardAvatar, cardPrice, cardPriceInfo, cardCardBid, cardProp) {
    discoverList.prepend(createNewCard(cardLink, cardSplash, cardName, cardAvatar, cardPrice, cardPriceInfo, cardCardBid, cardProp));
};

discoverCards.forEach(item => {
    renderCard(item.link, item.splash, item.name, item.avatar, item.price, item.priceInfo, item.cardBid, item.prop);
});

function createNewCard(cardLink, cardSplash, cardName, cardAvatar, cardPrice, cardPriceInfo, cardCardBid, cardProp) {
    
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
    card.dataset.tier = cardProp;
    
    return card;
};

const hotbidCards = discoverCards.slice(0, 4);

hotbidCards.forEach(item => {
    renderCardHotbid(item.link, item.splash, item.name, item.avatar, item.price, item.priceInfo, item.cardBid, item.prop);
});

function renderCardHotbid(cardLink, cardSplash, cardName, cardAvatar, cardPrice, cardPriceInfo, cardCardBid, cardProp) {
    hotbidList.prepend(createNewCard(cardLink, cardSplash, cardName, cardAvatar, cardPrice, cardPriceInfo, cardCardBid, cardProp));
};

const btnsArray = document.querySelectorAll('.dis');

btnsArray.forEach(item => {
    item.addEventListener('click', () => {
        btnsArray.forEach((item) => {
            item.classList.remove('dis_active');
        })
        item.classList.toggle('dis_active');
        showItem();
})
});

const discoverCatalog = document.querySelector('.discover');

function showItem() {
    let filterArr = [];
    const itemsContainer = discoverCatalog.querySelectorAll('.hotbid__list-item');
    
    btnsArray.forEach(item => {
        
        if (item.classList.contains('dis_active')) {
            filterArr.push(item.value);
            
        }
      
    });

    itemsContainer.forEach(item => {
        item.classList.remove('item__sortable');
            
        if (filterArr.includes(item.dataset.tier) == false) {
			 item.classList.add("item__sortable");
        }
        if (filterArr.includes('all items')) {
            item.classList.remove('item__sortable');
        }	
    });
}

