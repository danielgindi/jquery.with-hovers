jquery.with-hovers
==================

Tries to detect if there's a situation where hover's should be disabled, because of buggy behavior.

Say there's a touch screen with an actual mouse - then there's Touch events and Mouse events working correctly.

But if there's simply a touch screen - then mouse events are simulated, and hovers are simulated too. And they're sticky!

Simply include this file wherever on your page. Then if hovers should be enabled - the class "with-hovers" will be added to the HTML tag.

In your CSS, add the `html.with-hovers` selector as a prefix to any hover selector.
So say `li.active, li.selected, li:active, li:hover {...}` would now be `li.active, li.selected, li:active, html.with-hovers li:hover {...}`