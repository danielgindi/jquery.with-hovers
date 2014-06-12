// ==ClosureCompiler==
// @compilation_level ADVANCED_OPTIMIZATIONS
// @externs_url https://closure-compiler.googlecode.com/git/contrib/externs/jquery-1.9.js
// ==/ClosureCompiler==
/** @preserve    Library by Daniel Cohen Gindi (danielgindi@gmail.com) 054-5655765 
    MIT License!
*/
(function($){
        
    var touchDetected = null;
    var mouseHook = function () {
        if (touchDetected == null || +new Date() - touchDetected > 400) {
            // We may have a touch screen, but there's a mouse for sure, as it was not simulated after a touchend.
            $(document.documentElement).addClass('with-hovers');
        } else {
            // We have a touch screen, without a mouse. Mouse events are simulated!
        }
        $(window).off('mousemove', mouseHook).off('touchend', touchHook);
    }, touchHook = function () {
        touchDetected = +new Date();

        setTimeout(function(){
            // Nothing happened by now, stop looking for it...
            $(window).off('mousemove', mouseHook).off('touchend', touchHook);
        }, 400);
    };
    $(window).on('mousemove', mouseHook).on('touchend', touchHook);

})(jQuery);