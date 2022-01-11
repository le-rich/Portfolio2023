
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


// PROJECT INFO/ DESCRIPTIONS
const projectTitles = ["Rogue Carrier", "Hardspace: Shipbreaker", "STARPACK", "Ecocity: The Game", "Sunseeker", "Midnight Crown", "Roasted", "ARBoreal", "VisualEyes", "Hypeman", "VanIDI", "Canary"]
const projectDescriptions = 
{
  "Rogue Carrier": "A Video Game Made for Kajam 2021 in 7 Days. Control the weapon systems of a rogue Aircraft Carrier. <br> Use Weapons and airstrikes to defend yourself against an enemy fleet.",
  "Hardspace: Shipbreaker": "Equipped with cutting-edge salvaging tech, carve & slice spaceships to recover valuable materials. Upgrade your gear to take on more lucrative contracts and pay your billion credits debt to LYNX Corp.",
  "EFI": "A BC Game Jam Game made to answer a simple question. <br> What does the most insane version of space invaders to ever exist look like? <br> Now we know.",
  "Ecocity: The Game": "Who can build the best ecocity? Is it you? Balance economy and ecology to build your own sustainable city. Available now at ecothegamecity.ca and on the google play store.",
  "Sunseeker": "You are a researcher stranded in space. Your only hope? Some guy, but he's having a party, and you have to survive for 5 days! <br> Get energy orbs with your drone and refuel your base to stay alive.",
  "Midnight Crown": "An 'aerospace' combat game with full flight and combat controls both in atmosphere and zero-g.",
  "Roasted": "Get your coffee beans and get ready for a last stand. You play as Joe, a barista, as an endless horde of angry hipsters make their way to your cafe. Defend yourself! A game made for Global Game Jam 2017 in 3 days.",
  "ARBoreal": "An AR research project I participated in under the supervision Dr.Michael Barton. <br><br> The intention of the project was to enable architectural visualization of structures before they are built, and then to use AR to assist in the construction process once designs are finalized. To be used both industrially and educationally. I was responsible for building a cross software solution for transferring 3D data from an architectural prototyping software, Rhinoceros, to the Unity Game Engine in order to be rendered by the Microsoft Hololens.",
  "VisualEyes": "A Computer Vision/ Machine learning app that brings you to a product's storefront just by taking a photo of it. Using your phone's camera, a picture is taken of whatever you want to look up. Shape, color and text are analyzed and you are given the storefront of the closest match!",
  "Hypeman": "A social platform for motivation and energy. Post your daily qualms on a board full of positivity. Readers can 'up-hype' your post and send energy your way. But what if you're not feeling like posting? What if that's too much work? There's a feature called HYPEBOOST that, when selected, notifies everyone in your network to GIVE YOU SOME HYPE by asking you to SCREAM into the microphone! The app comes with a leaderboard for those that give and receive the most \"up-hypes\", moderation for negative comments, and an extremely sleek, lightweight user interface!",
  "VanIDI": "A comprehensive visual interface for City of Vancouver Workers to combine, filter and export data. <br> Use a geographical cropping tool to export all data in selected areas. Export to xlsx, csv or ArcGIS supported file formats.",
  "Canary": "A medical app that connects users to local trained volunteers who provide first-aid emergency medication before first responders reach a site. Current medication targets are Epinepherine, Insulin, Naloxone and CPR service.",
  "Green Guarden": "Create a garden, add plants, and be reminded when you need to water and pick them next! Taking care of your plants yields you XP for your profile.",
}

// INIT PROJECTS
window.addEventListener('load', (event) => {
  RefreshProject();
});

// PROJECTS CAROUSEL
var currentProjectIdx = 0;


let b = baffle("#projectTitle", {
  characters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()-+=[]{}|;:,./<>?▓█░',
})


function UpdateCurrentProjectDescription(){
  $("#project-description").html(projectDescriptions[projectTitles[currentProjectIdx]]);
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
  UpdateCurrentProjectDescription()
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
  UpdateCurrentProjectDescription()
  RunBaffleOnProjectTitle();
}

function RefreshProject(){
  b.text(function(){
    return projectTitles[currentProjectIdx]
  });
  UpdateCurrentProjectDescription();
  RunBaffleOnProjectTitle(projectTitles[currentProjectIdx]);
}

function SwitchCategory(idx){
  currProjectCategory = 0
}