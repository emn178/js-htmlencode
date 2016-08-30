(function (htmlEncode, htmlDecode) {
  var tests = [
    {
      encode: {
        method: htmlEncode,
        text: 'htmlEncode'
      },
      decode: {
        method: htmlDecode,
        text: 'htmlDecode'
      }
    }
  ];

  if (htmlEncode.htmlEncode) {
    tests = tests.concat([
      {
        encode: {
          method: htmlEncode.htmlEncode,
          text: 'htmlEncode.htmlEncode'
        },
        decode: {
          method: htmlEncode.htmlDecode,
          text: 'htmlEncode.htmlDecode'
        }
      }
    ]);
  }

  tests.forEach(function (test) {
    describe('#' + test.encode.text, function() {
      it('should be successful', function() {
        expect(test.encode.method('<a href="#">HTML Encode</a>')).to.be('&lt;a href=&quot;#&quot;&gt;HTML Encode&lt;/a&gt;');
        expect(test.encode.method('<\'&">')).to.be('&lt;&#39;&amp;&quot;&gt;');
      });
    });

    describe('#' + test.decode.text, function() {
      it('should be successful', function() {
        expect(test.decode.method('&lt;a href=&quot;#&quot;&gt;HTML Encode&lt;/a&gt;')).to.be('<a href="#">HTML Encode</a>');
        expect(test.decode.method('&lt;&#39;&amp;&quot;&gt;')).to.be('<\'&">');
        expect(test.decode.method('<a href="#">HTML Encode</a>')).to.be('<a href="#">HTML Encode</a>');
        expect(test.decode.method('&amp;amp;')).to.be('&amp;');
        expect(test.decode.method('&copy;&#169;&#xA9;')).to.be('©©©');
        expect(test.decode.method('&notfound;')).to.be('&notfound;');
        expect(test.decode.method('&#nan;')).to.be('&#nan;');
      });
    });
  });
})(htmlEncode, htmlDecode);
