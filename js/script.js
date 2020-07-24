
// Scroll wheel design
$("body").niceScroll({
  cursorcolor: "#ff9800",
  cursorwidth: "1.5rem",
  cursorborder: "none",
  cursorborderradius: "0",
  scrollspeed: 50,

});

// Scroll wheel button
var scrollwheelAnim = new SmoothScroll('.full-list', {
	speed: 1000
});

// Go back to top button
var scrollbtnAnim = new SmoothScroll('.scroll-top', {
	speed: 100
});
var scrollbtn = $('.scroll-top');
$(window).scroll(function() {
  if ($(window).scrollTop() > 500) {
    scrollbtn.addClass('show');
  } else {
    scrollbtn.removeClass('show');
  }
});
