/*
    Library by Daniel Cohen Gindi (danielgindi@gmail.com) 054-5655765 
    MIT License!
*/
(function(a){var b=null,c=function(){(null==b||400<+new Date-b)&&a(document.documentElement).addClass("with-hovers");a(window).off("mousemove",c).off("touchend",d)},d=function(){b=+new Date;setTimeout(function(){a(window).off("mousemove",c).off("touchend",d)},400)};a(window).on("mousemove",c).on("touchend",d)})(jQuery);
