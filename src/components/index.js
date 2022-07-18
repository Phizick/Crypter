import '../pages/index.css';




let slider = document.querySelector('.slider');
  let sliderList = slider.querySelector('slider-list');
  let sliderTrack = slider.querySelector('.slider-track');
  let slides = slider.querySelectorAll('.slide');
  
  
  
  const arrows = slider.querySelector('.content__info-nav');
  const prev = arrows.children[0];
  const next = arrows.children[1];
  let slideWidth = slides[0].offsetWidth;
  let slideIndex = 0;
  let posInit = 0;
  let posX1 = 0;
  let posX2 = 0;
  let posY1 = 0;
  let posY2 = 0;
  let posFinal = 0;
  let isSwipe = false;
  let isScroll = false;
  let allowSwipe = true;
  let transition = true;
  let nextTrf = 0;
  let prevTrf = 0;
  console.log(typeof slides)
  let slidesCount = slides.length;
  let lastTrf = --slidesCount * slideWidth;
  let posThreshold = slides[0].offsetWidth * 0.35;
  const trfRegExp = /([-0-9.]+(?=px))/;
  

  const getEvent = () => (event.type.search("touch") !== -1 ? event.touches[0] : event);

  const slide = function() {
    if (transition) {
      sliderTrack.style.transition = 'transform .5s';
    }
    sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;

    prev.classList.toggle('disabled', slideIndex === 0);
    next.classList.toggle('disabled', slideIndex === --slides.length);
  };
  const swipeStart = function() {
    let evt = getEvent();

    if (allowSwipe) {

      swipeStartTime = Date.now();     
      transition = true;
      nextTrf = (slideIndex + 1) * -slideWidth;
      prevTrf = (slideIndex - 1) * -slideWidth;
      posInit = posX1 = evt.clientX;
      posY1 = evt.clientY;
      sliderTrack.style.transition = '';
      document.addEventListener('touchmove', swipeAction);
      document.addEventListener('mousemove', swipeAction);
      document.addEventListener('touchend', swipeEnd);
      document.addEventListener('mouseup', swipeEnd);
      sliderList.classList.remove('grab');
      sliderList.classList.add('grabbing');
    }
  };
  const swipeAction = function() {

    let evt = getEvent();
      style = sliderTrack.style.transform;
      transform = +style.match(trfRegExp)[0];

    posX2 = posX1 - evt.clientX;
    posX1 = evt.clientX;

    posY2 = posY1 - evt.clientY;
    posY1 = evt.clientY;

    if (!isSwipe && !isScroll) {
      let posY = Math.abs(posY2);
      if (posY > 7 || posX2 === 0) {
        isScroll = true;
        allowSwipe = false;
      } else if (posY < 7) {
        isSwipe = true;
      }
    }

    if (isSwipe) {
      if (slideIndex === 0) {
        if (posInit < posX1) {
          setTransform(transform, 0);
          return;
        } else {
          allowSwipe = true;
          
        }
      }

      
      if (slideIndex === --slides.length) {
        if (posInit > posX1) {
          setTransform(transform, lastTrf);
          return;
        } else {
          allowSwipe = true;
        }
      }

      if (posInit > posX1 && transform < nextTrf || posInit < posX1 && transform > prevTrf) {
        reachEdge();
        return;
      }

      sliderTrack.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`;
    }

  };
  const swipeEnd = function() {
    posFinal = posInit - posX1;

    isScroll = false;
    isSwipe = false;

    document.removeEventListener('touchmove', swipeAction);
    document.removeEventListener('mousemove', swipeAction);
    document.removeEventListener('touchend', swipeEnd);
    document.removeEventListener('mouseup', swipeEnd);

    sliderList.classList.add('grab');
    sliderList.classList.remove('grabbing');

    if (allowSwipe) {
      swipeEndTime = Date.now();
      if (Math.abs(posFinal) > posThreshold || swipeEndTime - swipeStartTime < 300) {
        if (posInit < posX1) {
          slideIndex--;
        } else if (posInit > posX1) {
          slideIndex++;
        }
      }

      if (posInit !== posX1) {
        allowSwipe = false;
        slide();
      } else {
        allowSwipe = true;
      }

    } else {
      allowSwipe = true;
    }

  }
  const setTransform = function(transform, comapreTransform) {
    if (transform >= comapreTransform) {
      if (transform > comapreTransform) {
        sliderTrack.style.transform = `translate3d(${comapreTransform}px, 0px, 0px)`;
      }
    }
    allowSwipe = false;
  };
  const reachEdge = function() {
    transition = false;
    swipeEnd();
    allowSwipe = true;
  };

sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)';
// sliderList.classList.add('grab');

sliderTrack.addEventListener('transitionend', () => allowSwipe = true);
slider.addEventListener('touchstart', swipeStart, {passive: true});
slider.addEventListener('mousedown', swipeStart);


// arrows.forEach(item => {
// item.addEventListener('click', function() {
//   let target = event.target;

//   if (target.classList.contains('next')) {
//     slideIndex++;
//     console.log(1);
//   } else if (target.classList.contains('prev')) {
//     slideIndex--;
//     console.log(2);
//   } else {
//     return;
//   }

//   slide();
// })
// });

arrows.addEventListener("click", function () {
    let target = event.target;

    if (target.classList.contains("next")) {
        slideIndex++;
        console.log(1);
    } else if (target.classList.contains("prev")) {
        slideIndex--;
        console.log(2);
    } else {
        return;
    }

    slide();
});




import { discoverCards } from "./cards";

// const discoverList = document.getElementById('discoverList');
// const discoverTemplate = document.querySelector('.discover__template').content;
// const hotbidList = document.getElementById('hotbidList');

// function renderCard(cardLink, cardSplash, cardName, cardAvatar, cardPrice, cardPriceInfo, cardCardBid, cardProp) {
//     discoverList.prepend(createNewCard(cardLink, cardSplash, cardName, cardAvatar, cardPrice, cardPriceInfo, cardCardBid, cardProp));
// };

// discoverCards.slice(0, 8).forEach(item => {
//     renderCard(item.link, item.splash, item.name, item.avatar, item.price, item.priceInfo, item.cardBid, item.prop);
// });

// function createNewCard(cardLink, cardSplash, cardName, cardAvatar, cardPrice, cardPriceInfo, cardCardBid, cardProp) {
    
//     const card = discoverTemplate.querySelector(".hotbid__list-item").cloneNode(true);
//     const image = card.querySelector(".hotbid__card-img");
//     const splash = card.querySelector('.hotbid__card-splash');
//     const avatar = card.querySelector('.hotbid__container-img');
//     const price = card.querySelector('.hotbid__bid-span');
//     const priceInfo = card.querySelector('.hotbid__card-items-info');
//     const bid = card.querySelector('.hotbid__span');
//     const name = card.querySelector('.hotbid__container-name');
//     image.src = cardLink;
//     image.alt = cardName;     
//     splash.textContent = cardSplash; 
//     avatar.src = cardAvatar;
//     price.textContent = cardPrice;
//     priceInfo.textContent = cardPriceInfo;
//     bid.textContent = cardCardBid;
//     name.textContent = cardName; 
//     card.dataset.tier = cardProp;    
//     return card;
// };

// const hotbidCards = discoverCards.slice(0, 4);

// hotbidCards.forEach(item => {
//     renderCardHotbid(item.link, item.splash, item.name, item.avatar, item.price, item.priceInfo, item.cardBid, item.prop);
// });

// function renderCardHotbid(cardLink, cardSplash, cardName, cardAvatar, cardPrice, cardPriceInfo, cardCardBid, cardProp) {
//     hotbidList.prepend(createNewCard(cardLink, cardSplash, cardName, cardAvatar, cardPrice, cardPriceInfo, cardCardBid, cardProp));
// };

// const btnsArray = document.querySelectorAll('.dis');

// btnsArray.forEach(item => {
//     item.addEventListener('click', () => {
//         btnsArray.forEach((item) => {
//             item.classList.remove('dis_active');
//         })
//         item.classList.toggle('dis_active');
//         showItem();
// })
// });

// const discoverCatalog = document.querySelector('.discover');

// function showItem() {
//     let filterArr = [];
//     const sortableItems = discoverCatalog.querySelectorAll('.item__sortable');
//     const itemsContainer = discoverCatalog.querySelectorAll('.hotbid__list-item');
    
//     btnsArray.forEach(item => {        
//         if (item.classList.contains('dis_active')) {
//             filterArr.push(item.value);            
//         };
      
//     });

    

//    const hotbidListStyle = document.querySelector('.discover__edition');


//     itemsContainer.forEach(item => {
//         item.classList.remove('item__sortable');
//         filterArr.includes(item.dataset.tier) == false && item.classList.add("item__sortable");
//         filterArr.includes('all items') && item.classList.remove('item__sortable');       	
//     });

    
//     sortableItems.length >= 4 && (hotbidListStyle.style.justifyContent = `center`, hotbidListStyle.style.gap = `32px`);
       
// };


// const moreBtn = document.getElementById('moreBtn');

// moreBtn.addEventListener('click', () => {

    
    
//     discoverCards.slice(8, i).forEach(item => {
//         renderCard(item.link, item.splash, item.name, item.avatar, item.price, item.priceInfo, item.cardBid, item.prop);
//     });
    
// });





