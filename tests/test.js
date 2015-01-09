describe('Encode', function() {
  it('should be successful', function() {
    expect(htmlEncode('<a href="#">HTML Encode</a>')).to.be('&lt;a href=&quot;#&quot;&gt;HTML Encode&lt;/a&gt;');
    expect(htmlEncode('<\'&">')).to.be('&lt;&#39;&amp;&quot;&gt;');
  });
});

describe('Decode', function() {
  it('should be successful', function() {
    expect(htmlDecode('&lt;a href=&quot;#&quot;&gt;HTML Encode&lt;/a&gt;')).to.be('<a href="#">HTML Encode</a>');
    expect(htmlDecode('&lt;&#39;&amp;&quot;&gt;')).to.be('<\'&">');
    expect(htmlDecode('<a href="#">HTML Encode</a>')).to.be('<a href="#">HTML Encode</a>');
    expect(htmlDecode('&amp;amp;')).to.be('&amp;');
    expect(htmlDecode('&copy;&#169;&#xA9;')).to.be('©©©');
  });
});
