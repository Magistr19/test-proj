'use strict';

//Card Rating stars
let ratingStars = document.querySelectorAll('.rating-stars__stars-full');
let cardRatings = document.querySelectorAll('.rating-stars__number');

drawRatingStars();

function drawRatingStars() {
  for (let i = 0; i < cardRatings.length; i++) {
    let ratingNumber = cardRatings[i].textContent;
    ratingNumber = parseFloat(ratingNumber);
    ratingNumber = roundNumber(ratingNumber);

    switch (ratingNumber) {
      case 10:
        ratingStars[i].style.width = '68px';
        break;
      case 9.5:
        ratingStars[i].style.width = '68px';
        break;
      case 9:
        ratingStars[i].style.width = '62px';
        break;
      case 8.5:
        ratingStars[i].style.width = '62px';
        break;
      case 8:
        ratingStars[i].style.width = '55px';
        break;
      case 7.5:
        ratingStars[i].style.width = '55px';
        break;
      case 7:
        ratingStars[i].style.width = '48px';
        break;
      case 6.5:
        ratingStars[i].style.width = '48px';
        break;
      case 6:
        ratingStars[i].style.width = '41px';
        break;
      case 5.5:
        ratingStars[i].style.width = '41px';
        break;
      case 5:
        ratingStars[i].style.width = '34px';
        break;
      case 5:
        ratingStars[i].style.width = '34px';
        break;
      case 4.5:
        ratingStars[i].style.width = '27px';
        break;
      case 4:
        ratingStars[i].style.width = '27px';
        break;
      case 3.5:
        ratingStars[i].style.width = '20px';
        break;
      case 3:
        ratingStars[i].style.width = '20px';
        break;
      case 2.5:
        ratingStars[i].style.width = '13px';
        break;
      case 2:
        ratingStars[i].style.width = '13px';
        break;
      case 1.5:
        ratingStars[i].style.width = '6px';
        break;
      case 1:
        ratingStars[i].style.width = '6px';
        break;
      case 0.5:
        ratingStars[i].style.width = '0';
        break;
      case 0:
        ratingStars[i].style.width = '0';
        break;
      default:
        ratingStars[i].style.width = '0';
        break;
    }
  }
}


//Card favorites(likes)
let cardLikes = document.querySelectorAll('.short-nav__item--like button');

[].forEach.call(cardLikes, (item) => {
  item.addEventListener('click', listenerLikes);
});

function listenerLikes(evt) {
  evt.preventDefault();

  this.parentNode.classList.toggle('short-nav__item--like-active');
}


//Card compare
let cardCompares = document.querySelectorAll('.short-nav__item--compare button');

[].forEach.call(cardCompares, (item) => {
  item.addEventListener('click', listenerCompares);
});

function listenerCompares(evt) {
  evt.preventDefault();

  this.parentNode.classList.toggle('short-nav__item--compare-active');
}




//Service functions:
function roundNumber(value, step = 0.5) {
  let inv = 1.0 / step;
  return Math.round(value * inv) / inv;
}
