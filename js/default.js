jQuery(document).ready(function () {

$(window).load(function () {

ww = $(".elem_port").width();
$(".elem_port img").each(function( index ) {
      var currentImage = $(this);
	  var marginLeft = -(currentImage.width() / 2)
      currentImage.css({"left":"50%", "margin-left": marginLeft + "px"});
  })
})

// $(".elem_port").mouseleave(function(e){
// $(this).find("img").stop().animate({"margin-left":-($(this).find("img").width()/2)},700,"easeOutQuad")
// })



$(".elem_port").live( "mousemove", function(e) {
	 elem_To_animate = $(this).find("img");
	 
    if (! elem_To_animate.is(":animated")){
	var position = elem_To_animate.position();
    //alert('X: ' + position.left + ", Y: " + position.top );
	  elem_To_animate.stop(false,true).animate({"left":0,"margin":0})
	}
	
    var Welem = $(this).width();
    var Helem = $(this).height();
    
	
	var Wimg  = elem_To_animate.width();	
	var Himg  = elem_To_animate.height();	
 
	var currentx = e.pageX - this.offsetLeft;
	var currenty = e.pageY - this.offsetTop;
	
	var newx = (currentx * (Wimg-Welem) ) /  Welem
	var newy = (currenty * (Himg-Helem) ) /  Helem
	

	
	elem_To_animate.stop().animate({"left":- newx , "top":- newy},300,"easeOutExpo")
    console.log("e.pageX: " + newx + ", e.pageY: " + newy );
})





	
	

});

