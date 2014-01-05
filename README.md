[jqExpire](https://github.com/aalaap/jqExpire)
============

## Description
A jQuery plugin to automatically hide page elements after an 'expiry' date and/or time. Great for pages which have upcoming/ongoing event notices or cut-off times for forms and such.

Expiry dates and times can be set via data attributes or invoked via function calls on individual elements. The script checks the expiry time against the local system time and hides the expired elements.

## History
Like most of my projects, jqExpire was born out of personal need. I recently worked on a static site, which would have a lot of notices about upcoming and ongoing events. Since the site was static HTML (that's how we do things now - get with it!), instead of manually changing the HTML, I wrote some JavaScript to hide some notice elements after a particular date. It worked fine, so I decided to package it into a plugin, so I could use it in my other projects as well as let others use it.

## How it works
When invoked, jqExpire checks if the current local system time (the client side) is equal to or has passed the expiry time on an element and, if past, calls a jQuery `hide()` on it.

jqExpire doesn't set any JavaScript timeouts or intervals. It only checks the times once invoked. If you want live expiry of elements, you can set your own intervals and call jqExpire periodically.
 
Further versions will issue a callback upon hiding and also let you choose/specify a custom animation instead of the default.

## Installation
jqExpire requires jQuery 1.x or higher.

1. Include jQuery.
2. Include `jquery.jqExpire.js`.
3. Proceed to use it as explained below.

## Usage

### Via data attributes
This method is great for regular webpages and/or if you have a lot of static elements on the page that need to expire.

For each element that you'd like to expire, set the `data-expire` attribute to a full date/timestamp. For e.g.:

```
<div id="notice" class="latest notice" data-expire="2014-08-22 17:30:00">
```

At the end in your `ready()` block, call jqExpire with *no parameters*.

```
$( document ).ready(function() {
    // ...
    $().jqExpire();
});
``` 

### Via function calls
This method is better suited for webapps with a lot of dynamic elements that are created at runtime.

For each element that you'd like to expire, call:

```
$(element).jqExpire(time);
```

...where `element` is any valid jQuery selector or an array of ids/selectors. All matched elements will be expired if the time has passed `time`.


_TODO:_ For more granular control, you may specify an array of element selectors along with individual expiry dates:

```
$().jqExpire({
        '#banner' : '2013-10-12',
        'span#notice' : '2014-01-01',
        '.notices' : '2015-12-31'
    });
```

### Advanced use
Callbacks, timers, intervals etc. All To Do.

## To Do

1. ~~Write the plugin :-)~~
2. Make it Bower-able.
3. Make it AMD-able.
4. Have a beer.

## Version History
- 0.1.2-alpha: First release. Other than arrays, everything works.

## Problems?
Use GitHub to create issues.

## Contributing
Fork it, fix it, extend it, send a pull request!

## Credits
jqExpire is a plugin written by [Aalaap Ghag](http://aalaap.com).

## License
jqExpire has been released under the [Do What the Fuck You Want to Public License](http://www.wtfpl.net/about/), so you really can do whatever the fuck you want with it.

```
        DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
                    Version 2, December 2004 
        
Copyright (C) 2004 Sam Hocevar <sam@hocevar.net> 

Everyone is permitted to copy and distribute verbatim or modified 
copies of this license document, and changing it is allowed as long 
as the name is changed. 

            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
  TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION 

 0. You just DO WHAT THE FUCK YOU WANT TO.
```