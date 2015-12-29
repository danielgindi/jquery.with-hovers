/*
    Written by Daniel Cohen Gindi (danielgindi@gmail.com)
	https://github.com/danielgindi/jquery.with-hovers
	v1.1.0
    MIT License!
*/
(function(a){function c(){if(null==b||400<+new Date-b)a(document.documentElement).addClass("with-hovers"),a(window).off("mousemove",c).off("touchend",d)}function d(){b=+new Date}var b=null;a(document.documentElement).addClass("with-hovers");a(window).on("touchstart",function(){a(document.documentElement).removeClass("with-hovers");a(window).on("mousemove",c).on("touchend",d)})})(jQuery);