
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
    $("#top-navbar").css("top", "0px");
    $("#color-switcher").css("right", "0");
  } 
  else {
    $("#top-navbar").css("top", "-500px");
    $("#color-switcher").css("right", "-500px");
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

var flkty2 = new Flickity( elem3, {
  // options
  lazyLoad: true,
  pageDots: false,
  prevNextButtons: false,
  draggable: true,
  contain: true,
  freeScroll: true,
});



// PROJECT INFO/ DESCRIPTIONS
const projectTitles = ["Rogue Carrier", "Hardspace: Shipbreaker", "Starpack", "Ecocity: The Game", "Sunseeker", "Midnight Crown", "Roasted", "ARBoreal", "VisualEyes", "Hypeman", "VanIDI", "Canary"]
const projectInfo = 
{
  "Rogue Carrier": {  
    "description": "A Video Game Made for Kajam 2021 in 7 Days. Control the weapon systems of a rogue Aircraft Carrier. <br> Use Weapons and airstrikes to defend yourself against an enemy fleet.",
    "slugline": "Video Game - Personal - 7 Days"       
  },
  "Hardspace: Shipbreaker": {
    "description": "Equipped with cutting-edge salvaging tech, carve & slice spaceships to recover valuable materials.<br> Upgrade your gear to take on more lucrative contracts and pay your billion credits debt to LYNX Corp.",
    "slugline": "Video Game - Blackbird Interactive - Available Now"
  },
  "Starpack": {
    "description": "A BC Game Jam Game made to answer a simple question. <br> What does the most insane version of space invaders to ever exist look like? <br> Now we know.",
    "slugline": "Video Game - Personal - 8 Hours"
  },
  "Ecocity: The Game": {
    "description": "Who can build the best ecocity? Is it you? Balance economy and ecology to build your own sustainable city.<br> Available now at ecothegamecity.ca and on the google play store.",
  "slugline": "Video Game - Personal - 5 Weeks"
  },
  "Sunseeker": {
    "description": "You are a researcher stranded in space. Your only hope? Some guy, but he's having a party, and you have to survive for 5 days! <br> Get energy orbs with your drone and refuel your base to stay alive.",
    "slugline": "Video Game - Personal - 5 Weeks",
  },
  "Midnight Crown": {
    "description": "An 'aerospace' combat game with full flight and combat controls both in atmosphere and zero-g.",
    "slugline": "Video Game - Personal - 8 Months"
  },
  "Roasted": {
    "description": "Get your coffee beans and get ready for a last stand. You play as Joe, a barista, as an endless horde of angry hipsters make their way to your cafe. Defend yourself! A game made for Global Game Jam 2017 in 3 days.",
    "slugline": "Video Game - Personal - 3 Days"
  },
  "ARBoreal": {
    "description":"An AR research project to enable architectural visualization of structures before they are built, and then to use AR to assist in the construction process. To be used both industrially and educationally.",
    "slugline": "Software - COHO Labs"
  },
  "VisualEyes": {
    "description":"A Computer Vision/ Machine learning app that brings you to a product's storefront just by taking a photo of it. Using your phone's camera, a picture is taken of whatever you want to look up. Shape, color and text are analyzed and you are given the storefront of the closest match!",
    "slugline": "Web App - Hackathon - 24 Hours"
  },
  "Hypeman": {
    "description":"A social platform for motivation and energy. Post your daily qualms on a board full of positivity. Readers can 'up-hype' your post and send energy your way.",
    "slugline": "Web App - Hackathon - 24 Hours"
  },
  "VanIDI": {
    "description": "A comprehensive visual interface for City of Vancouver Workers to combine, filter and export data. <br> Use a geographical cropping tool to export all data in selected areas. Export to xlsx, csv or ArcGIS supported file formats.",
    "slugline": "Web App - Hackathon - 24 Hours"
  },
  "Canary": {
    "description" : "A medical app that connects users to local trained volunteers who provide first-aid emergency medication before first responders reach a site. Current medication targets are Epinepherine, Insulin, Naloxone and CPR service.",
    "slugline": "Web App - Hackathon - 48 Hours"
  },
  "Green Guarden": {
    "description": "Create a garden, add plants, and be reminded when you need to water and pick them next! Taking care of your plants yields you XP for your profile.",
    "slugline": "Web App - Schoolwork - 8 Hours"
  }
}

// INIT
window.addEventListener('load', (event) => {
  $("#top-navbar").css("top", "0px");
  $("#color-switcher").css("right", "0");
});

// PROJECTS CAROUSEL
var currentProjectIdx = 0;


let b = baffle("#project-title", {
  characters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()-+=[]{}|;:,./<>?▓█░',
})


function UpdateProjectDescriptionAndSlugline(){
  let currProjectDetails = projectInfo[projectTitles[currentProjectIdx]];
  $("#project-slugline").html(currProjectDetails.slugline);
  $("#project-description").html(currProjectDetails.description);
}

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
  flkty.next();
  UpdateProjectDescriptionAndSlugline()
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
  flkty.previous();
  UpdateProjectDescriptionAndSlugline()
  RunBaffleOnProjectTitle();
}

function RefreshProject(){
  b.text(function(){
    return projectTitles[currentProjectIdx]
  });
  UpdateProjectDescriptionAndSlugline();
  RunBaffleOnProjectTitle(projectTitles[currentProjectIdx]);
}

function SwitchCategory(idx){
  currProjectCategory = 0
}