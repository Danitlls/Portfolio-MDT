function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

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

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
      if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
          document.getElementById("topButton").style.display = "block";
          document.getElementById("topButton").style.visibility = "visible";

      } else {
          document.getElementById("topButton").style.display = "none";
      }
  }


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
