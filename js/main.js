openMobileNav = function(e) {
  $("body").toggleClass("open");
};

$(".nav-tab").click(openMobileNav);

$(document).ready(function(){
  $('#nav-icon4').click(function(){
    $(this).toggleClass('open');
  });
});

$(document).ready(function(){
  $('.burgWrapper').bind('click', function(){
    $('.burg').toggleClass('activeBurg');
  });
});

$('button').click(function() {
  $(this).toggleClass('clicked');
});




//people hover 

$(document).ready(function(){
  $(".person_name-single").hover(function(){
    $(this).css("background","#004fb1");
  },function(){
    $(this).css("background","");
  });
});

$(document).ready(function() {
    $("img.person_headshot").hover(function() {
        $(this).siblings(".person_name").addClass("your_color_class");
    }, function() {
        $(this).siblings(".person_name").removeClass("your_color_class");
    });
});

//hover on image to trigger color change (Poeple page)

$(document).ready(function() {
  $('.person_headshot').hover(function() {
    $('.person_name').css('background-color', '000');
  }, function() {
    // on mouseout, reset the background colour
    $('.person_name').css('background-color', '');
  });
});

//scroll side to side single person page .animate({'opacity':'0.8'}, 200)

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

