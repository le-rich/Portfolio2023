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
  textMainColor : "text-black",
  textAltColor : "text-white",
  foregroundColor : "bg-neutral-900",
  backgroundColor : "bg-white",
  accentColor : "bg-yellow-400",
}


function ColorModeCleanCut(){
  SetCleanCutColors();
  ActivateMeshCleanCut();
  SwapColors();
}
window.ColorModeCleanCut = ColorModeCleanCut


function ColorModeCyberWarfare(){
  SetCyberWarfareColors();
  ActivateMeshCyberWarfare();
  SwapColors();
}

function SetPrevColorThemeValues(){
  prevColorTheme.textMainColor = currColorTheme.textMainColor;
  prevColorTheme.textAltColor = currColorTheme.textAltColor;
  prevColorTheme.backgroundColor = currColorTheme.backgroundColor;
  prevColorTheme.foregroundColor = currColorTheme.foregroundColor;
  prevColorTheme.accentColor = currColorTheme.accentColor;
}

function SetCyberWarfareColors(){
  SetPrevColorThemeValues();

  currColorTheme.textMainColor = "text-lime-500";
  currColorTheme.textAltColor = "text-pink-600";
  currColorTheme.foregroundColor = "bg-zinc-900";
  currColorTheme.backgroundColor = "bg-black";
  currColorTheme.accentColor = "bg-fuchsia-600";
}

function SetCleanCutColors(){
  SetPrevColorThemeValues();
  
  currColorTheme.textMainColor = "text-black";
  currColorTheme.textAltColor = "text-white";
  currColorTheme.foregroundColor = "bg-neutral-900";
  currColorTheme.backgroundColor = "bg-white";
  currColorTheme.accentColor = "bg-yellow-400";
}

function SwapColors(){

  $("." + prevColorTheme.textMainColor).removeClass(prevColorTheme.textMainColor).addClass(currColorTheme.textMainColor)
  $("." + prevColorTheme.foregroundColor).removeClass(prevColorTheme.foregroundColor).addClass(currColorTheme.foregroundColor)
  $("." + prevColorTheme.backgroundColor).removeClass(prevColorTheme.backgroundColor).addClass(currColorTheme.backgroundColor)
  $("." + prevColorTheme.textAltColor).removeClass(prevColorTheme.textAltColor).addClass(currColorTheme.textAltColor)
  $("." + prevColorTheme.accentColor).removeClass(prevColorTheme.accentColor).addClass(currColorTheme.accentColor)
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
