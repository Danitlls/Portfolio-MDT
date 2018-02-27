function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


$(document).ready(function(){
  $(".hamburger").click(function(){
    $("nav").toggle(800);
    $(this).toggleClass("is-active");
  });
  $(".links").click(function(){
    $("nav").toggle(800);
    $(".hamburger").toggleClass("is-active");
  });
  // $(".intro").toggleUp(800);

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
      if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
          document.getElementById("myBtn").style.display = "block";

      } else {
          document.getElementById("myBtn").style.display = "none";
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
