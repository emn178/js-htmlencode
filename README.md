# js-htmlencode
[![Build Status](https://api.travis-ci.org/emn178/js-htmlencode.png)](https://travis-ci.org/emn178/js-htmlencode)
[![Build Status](https://coveralls.io/repos/emn178/js-htmlencode/badge.png?branch=master)](https://coveralls.io/r/emn178/js-htmlencode?branch=master)  
[![NPM](https://nodei.co/npm/js-htmlencode.png?stars&downloads)](https://nodei.co/npm/js-htmlencode/)  
A simple HTML encode / decode function for JavaScript.

## Demo
[HTML Encode Online](http://emn178.github.io/online-tools/html_encode.html)  
[HTML Decode Online](http://emn178.github.io/online-tools/html_decode.html)  

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
var htmlEncode = require('js-htmlencode');
```
Or
```JavaScript
var htmlEncode = require('js-htmlencode').htmlEncode;
var htmlDecode = require('js-htmlencode').htmlDecode;
```
It supports AMD:
```JavaScript
require(['your/path/htmlencode.js'], function (htmlEncode) {
  var htmlEncode = htmlEncode.htmlEncode;
  var htmlDecode = htmlDecode.htmlDecode;
  // ...
});
```
For TypeScript
```TypeScript
import { htmlEncode, htmlDecode } from 'js-htmlencode';
htmlEncode('ooo');
htmlDecode('xxx');
```
## Example
```JavaScript
htmlEncode('<a href="#">HTML Encode</a>'); // &lt;a href=&quot;#&quot;&gt;HTML Encode&lt;/a&gt;
htmlDecode('&lt;a href=&quot;#&quot;&gt;HTML Encode&lt;/a&gt;'); // <a href="#">HTML Encode</a>
htmlDecode('<a href="#">HTML Encode</a>'); // <a href="#">HTML Encode</a>
```

## License
The project is released under the [MIT license](http://www.opensource.org/licenses/MIT).

## Contact
The project's website is located at https://github.com/emn178/js-htmlencode  
Author: Chen, Yi-Cyuan (emn178@gmail.com)
