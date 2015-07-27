// Hamburger menu 
$(function() {
    $("a[href=#menuExpand]").click(function(e) {
        $(".main-nav").toggleClass("menuOpen");
        e.preventDefault();
    });
});

$(document).ready(function() {
    $("nav [href]").each(function() {
    if (this.href === window.location.href) {
        $(this).addClass("active");
        }
    });
});

(function() {

  "use strict";

  var toggles = document.querySelectorAll(".c-hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }

})();

$("button").click(function() {
  $(this).toggleClass("mob-nav-container-active");
});

//scroll side to side single person page

var view = $("#insideContainer");
var move = "100px";
var sliderLimit = -1700

$("#rightArrow").click(function(){
    
    var currentPosition = parseInt(view.css("left"));
    if (currentPosition >= sliderLimit) view.stop(false,true).animate({left:"-="+move},{ duration: 400})

});

$("#leftArrow").click(function(){

    var currentPosition = parseInt(view.css("left"));
    if (currentPosition < 0) view.stop(false,true).animate({left:"+="+move},{ duration: 400})

});