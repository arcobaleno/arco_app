// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require unslider.js
//= require_tree .

$(function() {
	$('#slide1_box1').hover(function(){
    $('#slide1_box1').css("opacity","0.4");
    },function(){
    $('#slide1_box1').css("opacity","1.0");
  });
});

$(function() {
	$('#slide1_box2').hover(function(){
    $('#slide1_box2').css("opacity","0.4");
    },function(){
    $('#slide1_box2').css("opacity","1.0");
  });
});

$(function() {
	$('.banner').unslider();
});

$(function() {
	$('#right').cycle({ 
    fx:      'scrollRight', 
    next:   '#right', 
    timeout:  0, 
    easing:  'easeInOutBack' 
	});
});