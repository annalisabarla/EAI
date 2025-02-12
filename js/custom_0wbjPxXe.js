/* Metodologici (#8) */

$(function(){
  var slideKey = 118;
  if(!window.swipers){window.swipers = {};}
  if(!window.swipers[slideKey]){window.swipers[slideKey] = [];}
  $('.swiper-'+slideKey).each(function(){
    var thisKey = window.swipers[slideKey].length;
    window.swipers[slideKey][thisKey] = 
      new Swiper(this, {
      slidesPerView: 'auto',
    });
    var _this;
    $(this).closest(".slide").find('.controller-external-118 li').click(function(){
      if(!$(this).hasClass("swiper-118-reinited")){
        _this = $(this).index();
        $(this).addClass("swiper-118-reinited");
        setTimeout(function(){
          window.swipers[slideKey][_this].update();
        },50);
      }
    });
  });
});