/* 20171009 DM - LHL w2d1

  Step 6 - Defining Callbacks - uppercase

*/

var objHTTP = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {
  console.log(html.toUpperCase());
}

// Tester:
objHTTP.getHTML(requestOptions, printUpperCase)