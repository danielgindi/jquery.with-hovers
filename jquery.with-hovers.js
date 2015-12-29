// ==ClosureCompiler==
// @compilation_level ADVANCED_OPTIMIZATIONS
// @externs_url https://raw.githubusercontent.com/google/closure-compiler/master/contrib/externs/jquery-1.9.js
// ==/ClosureCompiler==
/** @preserve    Written by Daniel Cohen Gindi (danielgindi@gmail.com)
	https://github.com/danielgindi/jquery.with-hovers
	v1.1.0
    MIT License!
*/
(function($){

    var touchDetected = null,
        timeout = null;
    
    var touchStartHook = function () {
        
        // We have touch. Disable hovers until we detect a legitimate mouse.
        $(document.documentElement)
            .removeClass('with-hovers');
           
        $(window)
            .on('mousemove', mouseHook)
            .on('touchend', touchEndHook);
    };
    
    var touchEndHook = function () {
        touchDetected = +new Date();
    };
    
    var mouseHook = function () {
        if (touchDetected == null || +new Date() - touchDetected > 400) {
            
            // We may have a touch screen, but there's a mouse for sure,
            //   as it was not simulated after a touchend.
            $(document.documentElement)
                .addClass('with-hovers');
        
            $(window)
                .off('mousemove', mouseHook)
                .off('touchend', touchEndHook);
            
        } else {
            // Mouse events are simulated!
            // So we have a touch screen, without a mouse.
        }
    };
    
    // Start with hovers
    $(document.documentElement)
        .addClass('with-hovers');
    
    // Listen for touch start
    $(window)
        .on('touchstart', touchStartHook);

})(jQuery);