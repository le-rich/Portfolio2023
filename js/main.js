
// CURSOR

var $cursorLerp = $('#cursorLerp');
// var $cursor = $('.cursor');
function moveCursors(e) {
	TweenLite.to($cursorLerp, 0.2, {
    css: {
      left: e.pageX,
      top: e.pageY
    }
  });
}

$(window).on('mousemove', moveCursors);


// SHOW / HIDES
$("#richard-info-circle").mouseenter(function(){
  $("#infotainer").fadeIn();
});

$("#richard-info-circle").mouseleave(function(){
  $("#infotainer").fadeOut();
});

// NAV HEADER ELEMENTS HIDE ON SCROLL
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    // $("#top-navbar").css("top", "0px");
    // $("#color-switcher").css("right", "0");
  } 
  else {
    // $("#top-navbar").css("top", "-500px");
    // $("#color-switcher").css("right", "-500px");
  }
  prevScrollpos = currentScrollPos;
}

// COLOR CHANGE SELECTORS

function ColorModeCleanCut(){
  console.log("Superclean")
}

function ColorModeCyberWarfare(){
  console.log("Cyberwarfare")
}

function ColorModeLuxe(){
  console.log("Luxe")
}


// PROJECT CAROUSEL FLICKITY
var elem = document.querySelector('.carousel1');
var elem2 = document.querySelector('.carousel2');
var elem3 = document.querySelector('.carousel3');
var elem4 = document.querySelector('.carousel4');
var flkty = new Flickity( elem, {
  // options
  lazyLoad: true,
  pageDots: false,
  prevNextButtons: false,
  draggable: true,
  contain: true,
  freeScroll: true,
});

var flkty2 = new Flickity( elem2, {
  // options
  lazyLoad: true,
  pageDots: false,
  prevNextButtons: false,
  draggable: true,
  contain: true,
  freeScroll: true,
});

var flkty3 = new Flickity( elem3, {
  // options
  lazyLoad: true,
  pageDots: false,
  prevNextButtons: false,
  draggable: true,
  contain: true,
  freeScroll: true,
});

var flkty4 = new Flickity( elem4, {
  // options
  lazyLoad: true,
  pageDots: false,
  prevNextButtons: false,
  draggable: true,
  contain: true,
  freeScroll: true,
});

// INIT
window.addEventListener('load', (event) => {
  $("#top-navbar").css("top", "0px");
  $("#color-switcher").css("right", "0");
});
