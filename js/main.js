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