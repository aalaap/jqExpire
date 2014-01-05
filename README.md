jqExpire
============

## Description
A jQuery plugin to automatically hide page elements after an 'expiry' date and/or time. Great for pages which have upcoming/ongoing event notices or cut-off times for forms and such.

Expiry dates and times can be set via data attributes or invoked via function calls on individual elements. The script checks the expiry time against the local system time and hides the expired elements.

## Usage
After including jQuery and `jquery.jqexpire.js`, you have two ways in which you can use jqExpire:

### Via data attributes
This method is great for regular webpages and/or if you have a lot of static elements on the page that need to expire.

1. For each element that you'd like to expire, set the `data-expire` attribute to a full date/timestamp. For e.g.:

```<div id="notice" class="latest notice" data-expire="2014-08-22 09:52pm">
```
2. At the end in your `ready()` block, call jqExpire with *no parameters*.

```$( document ).ready(function() {
    // ...
    $.jqExpire();
});``` 

### Via function calls
This method is better suited for webapps with a lot of dynamic elements that are created at runtime.

For each element that you'd like to expire, call:

```$.jqExpire(element, time);```

where `element` is any valid jQuery selector or an array. All matched elements will be expired at the end of the specified `time`.

In case of an array, you can also specify multiple timeouts. For e.g.:

```$.jqExpire(
    {
        'elem1':'2013-10-12',
        'elem2':'2014-01-01'
    });```

in which case the `time` parameter will be ignored.

## To Do

1. Write the plugin :-)
2. Make the documentation more legible where code is concerned.
3. Make it Bower-able.
4. Have a beer.

## Known & Possible Bugs
- none, at the moment.

## Problems?
Use GitHub to create issues.

## Contributing
Fork it, fix it, extend it, send a pull request!

## Credits
jqExpire is a plugin written by [Aalaap Ghag](http://aalaap.com). It is released under the [Do What the Fuck You Want to Public License](http://www.wtfpl.net/about/), so you really can do whatever the fuck you want with it.