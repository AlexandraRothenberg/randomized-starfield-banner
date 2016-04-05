var $banner = $('.banner');
var $width = $banner.outerWidth();
var $height = $banner.outerHeight();
var $makeStars;

for (i = 0; i < 75; i++) {
  
  $makeStars = $('<div>');
  $makeStars.addClass('star');
  $makeStars.css({
    top: Math.random() * $height,
    left: Math.random() * $width,
    opacity: Math.random()
    transform: 'rotate(' + Math.random() * 360 + 'deg) scale(' + Math.random() + ')'
  
  });
  
  $banner.append($makeStars);
  
};
