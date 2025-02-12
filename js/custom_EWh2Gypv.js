/* Slide 115 (#5) */

$(function(){
  var slideKey = 115;
  if(!window.swipers){window.swipers = {};}
  if(!window.swipers[slideKey]){window.swipers[slideKey] = [];}
  $('.swiper-'+slideKey).each(function(){
    var thisKey = window.swipers[slideKey].length;
    window.swipers[slideKey][thisKey] = 
      new Swiper(this, {
      slidesPerView: 1,
      spaceBetween: 25,
      navigation: {
        nextEl: this.querySelector('.swiper-115-next'),
        prevEl: this.querySelector('.swiper-115-prev'), 
      },      
    });
  });
});