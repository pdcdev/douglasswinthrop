openMobileNav=function(n){$("body").toggleClass("open")},$(".nav-tab").click(openMobileNav),$(document).ready(function(){$(".person_name-single").hover(function(){$(this).css("background","#004fb1")},function(){$(this).css("background","")})}),$(document).ready(function(){$("img.person_headshot").hover(function(){$(this).siblings(".person_name").addClass("your_color_class")},function(){$(this).siblings(".person_name").removeClass("your_color_class")})}),$(document).ready(function(){$(".person_headshot").hover(function(){$(".person_name").css("background-color","000")},function(){$(".person_name").css("background-color","")})});var view=$("#insideContainer"),move="100px",sliderLimit=-1700;$("#rightArrow").click(function(){var n=parseInt(view.css("left"));n>=sliderLimit&&view.stop(!1,!0).animate({left:"-="+move},{duration:400})}),$("#leftArrow").click(function(){var n=parseInt(view.css("left"));0>n&&view.stop(!1,!0).animate({left:"+="+move},{duration:400})});