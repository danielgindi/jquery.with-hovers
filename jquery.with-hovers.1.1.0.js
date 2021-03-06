// ==ClosureCompiler==
// @externs_url https://raw.githubusercontent.com/google/closure-compiler/master/contrib/externs/jquery-1.9.js
// ==/ClosureCompiler==
/** @preserve jquery.with-hovers
 * git://github.com/danielgindi/jquery.with-hovers.git
 */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define('jquery.with-hovers', ['jquery'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('jquery'));
    } else {
        /*root.withhovers = */factory(root.jQuery);
    }
}(this, function ($) {
    'use strict';

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

}));
