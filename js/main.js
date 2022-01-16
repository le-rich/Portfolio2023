import { ActivateMeshCleanCut, ActivateMeshCyberWarfare } from './3d.js'


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
var prevColorTheme = {
  accentColor : "",
  foregroundColor: "",
  backgroundColor: "",
  textMainColor: "",
  textAltColor: "" 
}

var currColorTheme = {
  accentColor : "bg-yellow-400",
  foregroundColor: "bg-black",
  backgroundColor: "bg-white",
  textMainColor: "text-black",
  textAltColor: "text-white",
}


function ColorModeCleanCut(){
  console.log("Superclean")
  ActivateMeshCleanCut();
}
window.ColorModeCleanCut = ColorModeCleanCut


function ColorModeCyberWarfare(){
  SetCyberWarfareColors();
  ActivateMeshCyberWarfare();
  SwapColors();
}

function SetPrevColorThemeFromPrevious(){
  prevColorTheme.textMainColor = currColorTheme.textMainColor;
  prevColorTheme.textAltColor = currColorTheme.textAltColor;
  prevColorTheme.backgroundColor = currColorTheme.backgroundColor;
  prevColorTheme.foregroundColor = currColorTheme.foregroundColor;
  prevColorTheme.accentColor = currColorTheme.accentColor;
}

function SetCyberWarfareColors(){
  SetPrevColorThemeFromPrevious();

  currColorTheme.textMainColor = "text-[#9ff800]";
  currColorTheme.textAltColor = "text-[#df179e]";
  currColorTheme.foregroundColor = "bg-black";
  currColorTheme.backgroundColor = "bg-black";
  currColorTheme.accentColor = "bg-[#df179e]";
}

function SwapColors(){
  console.log(prevColorTheme)
  console.log(currColorTheme)
  $("." + prevColorTheme.accentColor).removeClass(prevColorTheme.accentColor).addClass(currColorTheme.accentColor)
  $("." + prevColorTheme.textMainColor).removeClass(prevColorTheme.textMainColor).addClass(currColorTheme.textMainColor)
  $("." + prevColorTheme.backgroundColor).removeClass(prevColorTheme.backgroundColor).addClass(currColorTheme.backgroundColor)
  $("." + prevColorTheme.foregroundColor).removeClass(prevColorTheme.foregroundColor).addClass(currColorTheme.foregroundColor)

  $("." + prevColorTheme.textAltColor).removeClass(prevColorTheme.textAltColor).addClass(currColorTheme.textAltColor)
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
