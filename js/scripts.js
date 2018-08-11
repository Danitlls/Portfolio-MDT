function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
//   $('#topButton').click(function(){
//     $('html, body').animate({scrollTop:0}, 800);
// });
}

// $('#topButton').click(function(){
//     $('body').animate({
//         scrollTop: 0
//     }, 2000);
// });
  // <button onclick="topFunction()" id="topButton" title="Go to top">Top</button>


$(document).ready(function(){
  $(".hamburger").click(function(){
    $(".mobile-screen").toggle(600);
    $(this).toggleClass("is-active");
  });
  $(".mobile-links").click(function(){
    $(".mobile-screen").toggle(600);
    $(".hamburger").toggleClass("is-active");
  });
  // $(".intro").toggleUp(800);



  function scrollFunction() {
      if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
          document.getElementById("topButton").style.display = "block";
          document.getElementById("topButton").style.visibility = "visible";

      } else {
          document.getElementById("topButton").style.display = "none";
      }
  }

  window.onscroll = function() {scrollFunction()};


// Hook doAnimations on scroll, and trigger a scroll
// $(window).on('scroll', function(){
//   $(".block1").removeClass("animatable").addClass("animated");
//   $(window).trigger('scroll');
// });



// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//          document.getElementById("block1").addClass("animated");
//     }
//     //  else {
//     //     $(".block1").removeClass("animated").addClass("animatable");
//     // }
// }
// scrollFunction();
// body.on("scroll") = function() {scrollFunction()};
});


(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {

      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };

})(jQuery);

var win = $(window);

var allMods = $(".module");

allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible");
  }
});

win.scroll(function(event) {

  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in");
    }
  });

});
