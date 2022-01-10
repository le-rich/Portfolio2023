
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


$("#richard-info-circle").mouseenter(function(){
  console.log("hidden")
  $("#infotainer").fadeIn();
});

$("#richard-info-circle").mouseleave(function(){
  console.log("visible")
  $("#infotainer").fadeOut();
});

// NAV HEADER ELEMENTS HIDE ON SCROLL
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    $("#top-navbar").css("top", "0px");
    $("#color-switcher").css("right", "0");
  } 
  else {
    $("#top-navbar").css("top", "-500px");
    $("#color-switcher").css("right", "-500px");
  }
  prevScrollpos = currentScrollPos;
}

// PROJECTS CAROUSEL

var currentProjectIdx = 0;

const projectTitles = ["Rogue Carrier", "Hardspace: Shipbreaker", "EFI", "Ecocity: The Game", "Sunseeker", "Midnight Crown", "Roasted", "ARBoreal", "VisualEyes", "Hypeman", "VanIDI", "Canary"]

let b = baffle("#projectTitle", {
  characters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()-+=[]{}|;:,./<>?▓█░',
})


function RunBaffleOnProjectTitle(){
  b.start();
  b.reveal(1000);
}

function NextProject(){
  currentProjectIdx++;
  currentProjectIdx %= projectTitles.length;
  b.text(function(){
    return projectTitles[currentProjectIdx]
  });
  RunBaffleOnProjectTitle();
}

function PreviousProject(){
  currentProjectIdx--;
  if (currentProjectIdx < 0){
    currentProjectIdx = projectTitles.length - 1
  }
  currentProjectIdx %= projectTitles.length;
  b.text(function(){
    return projectTitles[currentProjectIdx]
  });
  RunBaffleOnProjectTitle();
}

function RefreshProject(){
  RunBaffleOnProjectTitle(projectTitles[currentProjectIdx]);
}

function SwitchCategory(idx){
  currProjectCategory = 0
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