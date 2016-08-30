// Smooth scrolling to anchor
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    // Carousel control 
    if ($(this).attr('class').indexOf("carousel-control") >= 0 ) {
      
    }
    // Scrolling to anchor
    else {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    }
  });
});