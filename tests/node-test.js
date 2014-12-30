var htmlEncode = require('../src/htmlencode.js').htmlEncode;
var htmlDecode = require('../src/htmlencode.js').htmlDecode;
var test = require('tape');

test('encode', function (t) {
	t.equal(htmlEncode('<a href="#">HTML Encode</a>'), '&lt;a href=&quot;#&quot;&gt;HTML Encode&lt;/a&gt;');
	t.equal(htmlEncode('<\'&">'), '&lt;&#39;&amp;&quot;&gt;');
  t.end()
});

test('decode', function (t) {
  t.equal(htmlDecode('&lt;a href=&quot;#&quot;&gt;HTML Encode&lt;/a&gt;'), '<a href="#">HTML Encode</a>');
  t.equal(htmlDecode('&lt;&#39;&amp;&quot;&gt;'), '<\'&">');
  t.equal(htmlDecode('<a href="#">HTML Encode</a>'), '<a href="#">HTML Encode</a>');
  t.equal(htmlDecode('&amp;amp;'), '&amp;');
  t.equal(htmlDecode('&copy;&#169;&#xA9;'), '©©©');
  t.end()
});
