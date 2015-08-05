

//people hover 

$(document).ready(function(){
  $(".person_name-single").hover(function(){
    $(this).css("background","#000");
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

