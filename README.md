jquery.with-hovers
==================

This little plugin auto-detects hover support, and adds a class `with-hovers` to the document element.

## The problem:

* On touch devices - mouse events are simulated, and hovers are simulated too. And the hover state tends to stick, and required two or three taps to actually click a hoverable element.
* With mouse devices - we do want hovers, to indicate an interactive element.
* With combined mouse+touch devices - the user can move between touch and mouse...

So this code detects whether the user uses a touch device or a mouse device, and adds/removes the `with-hovers` class dynamically.

## Usage:

Simply include this file wherever on your page. Then if hovers should be enabled - the class "with-hovers" will be added to the HTML tag.

In your CSS, add the `html.with-hovers` selector as a prefix to any hover selector.
So say `li.active, li.selected, li:active, li:hover {...}` would now be `li.active, li.selected, li:active, html.with-hovers li:hover {...}`

## Me
* Hi! I am Daniel Cohen Gindi. Or in short- Daniel.
* danielgindi@gmail.com is my email address.
* That's all you need to know.

## Help

If you want to buy me a beer, you are very welcome to
[![Donate](https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=45T5QNATLCPS2)
 Thanks :-)

## License

All the code here is under MIT license. Which means you could do virtually anything with the code.
I will appreciate it very much if you keep an attribution where appropriate.

    The MIT License (MIT)

    Copyright (c) 2013 Daniel Cohen Gindi (danielgindi@gmail.com)

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
