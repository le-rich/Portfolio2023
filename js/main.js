
var $cursorLerp = $('.cursorLerp');
// var $cursor = $('.cursor');
function moveCursors(e) {
	TweenLite.to($cursorLerp, 0.2, {
    css: {
      left: e.pageX,
      top: e.pageY
    }
  });
  
  // TweenLite.to($cursor, 0.3, {
  //   css: {
  //     left: e.pageX,
  //     top: e.pageY
  //   }
  // });
}

$(window).on('mousemove', moveCursors);


$("#info-circle").mouseenter(function(){
  console.log("hidden")
  $("#infotainer").fadeIn();
});

$("#info-circle").mouseleave(function(){
  console.log("visible")
  $("#infotainer").fadeOut();
});