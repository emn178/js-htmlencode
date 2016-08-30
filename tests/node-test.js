htmlEncode = require('../src/htmlencode.js').htmlEncode;
htmlDecode = require('../src/htmlencode.js').htmlDecode;
expect = require('expect.js');
require('./test.js');

delete require.cache[require.resolve('../src/htmlencode.js')]
delete require.cache[require.resolve('./test.js')]
htmlEncode = null;
htmlDecode = null;

JS_HTMLENCODE_TEST = true;
require('../src/htmlencode.js').htmlEncode;
require('../src/htmlencode.js').htmlDecode;
require('./test.js');
