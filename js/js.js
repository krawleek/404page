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


		$(function() {

			var marquee = $("#marquee"); 
			marquee.css({"overflow": "hidden", "width": "100%"});

			// �������� ��� ������ ����� span (IE �� ����� ���� � inline-block)
			marquee.wrapInner("<span>");
			marquee.find("span").css({ "width": "50%", "display": "inline-block", "text-align":"center" }); 
			marquee.append(marquee.find("span").clone()); // ��� � ��� ��� span � �������

			marquee.wrapInner("<div>");
			marquee.find("div").css("width", "200%");

			var reset = function() {
				$(this).css("margin-left", "0%");
				$(this).animate({ "margin-left": "-100%" }, 12000, 'linear', reset);
			};

			reset.call(marquee.find("div"));

		});

  