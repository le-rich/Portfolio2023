import { ActivateMeshCyberWarfare } from './3d.js'


// CURSOR
var $cursorLerp = $('#cursorLerp');
// var $cursor = $('.cursor');
function moveCursors(e) {
	TweenLite.to($cursorLerp, 0.1, {
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
var accentColor = ""
var foregroundColor = "bg-black"
var backgroundColor = "bg-white"
var textMainColor = "text-black"
var textAltColor = "text-white"



function ColorModeCleanCut(){
  console.log("Superclean")
}
window.ColorModeCleanCut = ColorModeCleanCut


function ColorModeCyberWarfare(){
  $(".text-black").removeClass("text-black").addClass("text-[#9ff800]")
  $(".bg-white").removeClass("bg-white").addClass("bg-black")
  $(".bg-yellow-400").removeClass("bg-yellow-400").addClass("bg-[#df179e]")
  $(".text-white").removeClass("text-white").addClass("text-[#df179e]")
  ActivateMeshCyberWarfare();
}

function SetCyberWarfareColors(){
  textMainColor = "text-[#9ff800]";
  textAltColor = "text-[#df179e]";
  foregroundColor = "bg-black";
  backgroundColor = "bg-[#df179e]";
}
window.ColorModeCyberWarfare = ColorModeCyberWarfare

function ColorModeLuxe(){
  console.log("Luxe")
}
window.ColorModeLuxe = ColorModeLuxe


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
