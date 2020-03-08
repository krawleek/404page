var $ = jQuery;
$(document).ready();

$(function() {

  var max_height = $('main').height();
  var max_width = $('main').width();
  var skull_count = Math.floor((max_height * max_width) / 2500);

  for (var i = 0; i < skull_count; i++) {

    var skull_top = 80 + Math.random() * (max_height - 80);
    var skull_left = Math.random() * (max_width - 80);
    var skull_rotate = Math.random() * 360;
    $('main').append('<div class="skull" style="top:' + skull_top + 'px; left: ' + skull_left + 'px; transform: rotate(' + skull_rotate + 'deg);"></div>');

  }

});


// Движение черепов
$(function() {

  $('.skull').hover(function(){

    var max_height = $('main').height();
    var max_width = $('main').width();
    var skull_top = 80 + Math.random() * (max_height - 80);
    var skull_left = Math.random() * (max_width - 80);

    if (!$(this).hasClass('fly')) {

      $(this).addClass('fly');
      $(this).animate(
        {'top': skull_top + 'px', 'left': skull_left + 'px'}, 
        500,
        function(){
          $(this).removeClass('fly');
        }
      );


    }

  });

});


// Анимация строк
function Animate(id) {

  var marquee = $(id); 
  marquee.css({"overflow": "hidden", "width": "100%"});
 
  marquee.wrapInner("<span>");
  marquee.find("span").css({ "width": "50%", "text-align":"center" }); 
  marquee.append(marquee.find("span").clone()); 

  marquee.wrapInner("<div>");
  marquee.find("div").css("width", "200%");

  var reset = function() {

    $(this).css("margin-left", "0%");
    $(this).animate({ "margin-left": "-100%" }, 12000, 'linear', reset);

  };

  reset.call(marquee.find("div"));

}


$(function() {
  Animate("#marquee");
});


$(function() {
  Animate("#marquee1");
});