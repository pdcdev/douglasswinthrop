// Hamburger menu 




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