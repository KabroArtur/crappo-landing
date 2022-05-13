window.onscroll = function(){scrollFunction()};

function scrollFunction(){
    var scroll = $(window).scrollTop();
    if (scroll >= 30) {
      $(".Header").addClass("active");
    } else {
      $(".Header").removeClass("active");
    }
}