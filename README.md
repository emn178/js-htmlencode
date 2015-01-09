# js-htmlencode
[![Build Status](https://api.travis-ci.org/emn178/js-htmlencode.png)](https://travis-ci.org/emn178/js-htmlencode)
[![Build Status](https://coveralls.io/repos/emn178/js-htmlencode/badge.png?branch=master)](https://coveralls.io/r/emn178/js-htmlencode?branch=master)  
[![NPM](https://nodei.co/npm/js-htmlencode.png?stars&downloads)](https://nodei.co/npm/js-htmlencode/)  
A simple HTML encode / decode function for JavaScript.

## Demo
[HTML Encode Online](http://emn178.github.io/online-tools/html_encode.html)  
[HTML Decode  Online](http://emn178.github.io/online-tools/html_decode.html)  

## Download
[Compress](https://raw.github.com/emn178/js-htmlencode/master/build/htmlencode.min.js)  
[Uncompress](https://raw.github.com/emn178/js-htmlencode/master/src/htmlencode.js)

## Installation
You can also install js-htmlencode by using Bower.

    bower install js-htmlencode

For node.js, you can use this command to install:

    npm install js-htmlencode

## Usage
You could use like this:
```JavaScript
htmlEncode('Html to encode');
htmlDecode('String to decode');
```
If you use node.js, you should require the module first:
```JavaScript
htmlEncode = require('js-htmlencode');
```
Or
```JavaScript
htmlEncode = require('js-htmlencode').htmlEncode;
htmlDecode = require('js-htmlencode').htmlDecode;
```
## Example
Code
```JavaScript
htmlEncode('<a href="#">HTML Encode</a>');
htmlDecode('&lt;a href=&quot;#&quot;&gt;HTML Encode&lt;/a&gt;');
htmlDecode('<a href="#">HTML Encode</a>');
```
Output

    &lt;a href=&quot;#&quot;&gt;HTML Encode&lt;/a&gt;
    <a href="#">HTML Encode</a>
    <a href="#">HTML Encode</a>

## Extensions
### jQuery
If you prefer jQuery style, you can add following code to add a jQuery extension.

Code
```JavaScript
jQuery.htmlEncode = htmlEncode
jQuery.htmlDecode = htmlDecode
```
And then you could use like this:
```JavaScript
$.htmlEncode('<a href="#">HTML Encode</a>');
$.htmlDecode('&lt;a href=&quot;#&quot;&gt;HTML Encode&lt;/a&gt;');
```
### Prototype
If you prefer prototype style, you can add following code to add a prototype extension.

Code
```JavaScript
String.prototype.htmlEncode = function() {
  return htmlEncode(this);
};
String.prototype.htmlDecode = function() {
  return htmlDecode(this);
};
```
And then you could use like this:
```JavaScript
'<a href="#">HTML Encode</a>'.htmlEncode();
'&lt;a href=&quot;#&quot;&gt;HTML Encode&lt;/a&gt;'.htmlDecode();
```
## License
The project is released under the [MIT license](http://www.opensource.org/licenses/MIT).

## Contact
The project's website is located at https://github.com/emn178/js-htmlencode  
Author: emn178@gmail.com
