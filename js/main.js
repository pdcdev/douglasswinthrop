// Hamburger menu 
$(function() {
    $("a[href=#menuExpand]").click(function(e) {
        $(".main-nav").toggleClass("menuOpen");
        e.preventDefault();
    });
});