// Node.js env
expect = require('expect.js');
htmlEncode = require('../src/htmlencode.js').htmlEncode;
htmlDecode = require('../src/htmlencode.js').htmlDecode;
require('./test.js');

delete require.cache[require.resolve('../src/htmlencode.js')]
delete require.cache[require.resolve('./test.js')]
htmlEncode = null;
htmlDecode = null;

// Webpack browser env
JS_HTMLENCODE_NO_NODE_JS = true;
window = global;
htmlEncode = require('../src/htmlencode.js').htmlEncode;
htmlDecode = require('../src/htmlencode.js').htmlDecode;
require('./test.js');

delete require.cache[require.resolve('../src/htmlencode.js')];
delete require.cache[require.resolve('./test.js')];
htmlEncode = null;
htmlDecode = null;

// browser env
JS_HTMLENCODE_NO_NODE_JS = true;
JS_HTMLENCODE_NO_COMMON_JS = true;
window = global;
require('../src/htmlencode.js')
require('./test.js');

delete require.cache[require.resolve('../src/htmlencode.js')];
delete require.cache[require.resolve('./test.js')];
htmlEncode = null;
htmlDecode = null;

// browser AMD
JS_HTMLENCODE_NO_NODE_JS = true;
JS_HTMLENCODE_NO_COMMON_JS = true;
window = global;
define = function (func) {
  htmlEncode = func().htmlEncode;
  htmlDecode = func().htmlDecode;
  require('./test.js');
};
define.amd = true;

require('../src/htmlencode.js');
