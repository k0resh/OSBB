let menuBtn = document.querySelector('.menu-btn');
let burgerBtn = document.querySelector('.burger-btn');
let mobileMenu = document.querySelector('.mobile-menu');

menuBtn.onclick = function(){
    burgerBtn.classList.toggle('active')
    mobileMenu.classList.toggle('mobile-menu-active')
}

$(document).ready(function(){
  $('.last-photos-slider').slick({
  	 // nextArrow: '<button class="slick-arrow slick-next"><img src="images/sliderR.png" alt="next arrow"></button>',
    // prevArrow: '<button class="slick-arrow slick-prev"><img src="images/sliderL.png" alt="prev arrow"></button>',
    dots: true,
    slidesToShow: 3,
    // variableWidth: true,
    appendArrows: '.last-photos-slider__arrows',
    appendDots: '.last-photos-slider__dots',
    responsive: [
      {
        breakpoint: 651,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
})

$(document).ready(function(){
  $('.last-news__slider').slick({
  	 // nextArrow: '<button class="slick-arrow slick-next"><img src="images/sliderR.png" alt="next arrow"></button>',
    // prevArrow: '<button class="slick-arrow slick-prev"><img src="images/sliderL.png" alt="prev arrow"></button>',
    dots: true,
    slidesToShow: 1,
    // variableWidth: true,
    appendArrows: '.last-news-slider__arrows',
    appendDots: '.last-news-slider__dots',
  });
})