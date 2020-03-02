var $ = jQuery;
$(document).ready();

$(function() {
 var height = $('main').height();
  var width = $('main').width();
  for (var i = 0; i < 300; i++) {
   var skull_top = Math.random() * height;
   var skull_left = Math.random() * width;
   var skull_rotate = Math.random() * 360;
  $('main').append('<div class="skull" style="top:' + skull_top + 'px; left: ' + skull_left + 'px; transform: rotate(' + skull_rotate + 'deg);"></div>');
  }
});

$(function() {

 var height = $('main').height();
  var width = $('main').width();
 $('.skull').hover(function(){
  
   var skull_top = Math.random() * height;
   var skull_left = Math.random() * width;
   $(this).animate({'top': skull_top + 'px', 'left': skull_left + 'px'}, 1000);
  
  });

});