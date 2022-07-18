import '../pages/index.css'

const slider = document.querySelector('.slider');
const sliderList = slider.querySelector('slider-list');
const sliderTrack = slider.querySelector('.slider-track');
const sliders = slider.querySelectorAll('.slide');
// const slides = Array.from(sliderss)
const arrows = slider.querySelector('.content__info-nav');
const prev = arrows.children[0];
const next = arrows.children[1];
const slideWidth = slides[0].offsetWidth;
const slideIndex = 0;
const posInit = 0;
const posX1 = 0;
const posX2 = 0;
const posY1 = 0;
const posY2 = 0;
const posFinal = 0;
const isSwipe = false;
const isScroll = false;
const allowSwipe = true;
const transition = true;
const nextTrf = 0;
const prevTrf = 0;
const lastTrf = --slides.length * slideWidth;
const posThreshold = slides[0].offsetWidth * 0.35;
const trfRegExp = /([-0-9.]+(?=px))/;

const getEvent = () => (evt.type.search("touch") !== -1 ? evt.touches[0] : evt);

const slide = () => {
    if (transition) {
        sliderTrack.style.transition = 'transform .5s';
    }
    sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;
    prev.classList.toggle('disabled', slideIndex === 0);
    next.classList.toggle('disabled', slideIndex === --slides.length);
};

const swipeStart = () => {
    const evt = getEvent();
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

const swipeAction = () => {
    const evt = getEvent();
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

const swipeEnd = () => {
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
};

const setTransform = (transform, comapreTransform) => {
    if (transform >= comapreTransform) {
        if (transform > comapreTransform) {
          sliderTrack.style.transform = `translate3d(${comapreTransform}px, 0px, 0px)`;
        }
      }
      allowSwipe = false;
    };
    const reachEdge = () => {
      transition = false;
      swipeEnd();
      allowSwipe = true;
};

