// http://ahrengot.com/tutorials/greensock-javascript-animation

var $cursorLerp = $('.cursorLerp');
var $cursor = $('.cursor');

function moveCursors(e) {
	TweenLite.to($cursorLerp, 0.2, {
    css: {
      left: e.pageX,
      top: e.pageY
    }
  });
  
  TweenLite.to($cursor, 0.3, {
    css: {
      left: e.pageX,
      top: e.pageY
    }
  });
}

$(window).on('mousemove', moveCursors);