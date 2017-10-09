/* 20171009 DM - LHL w2d1

  Step 6 - Defining Callbacks - lowercase

*/

var objHTTP = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase(html){
  console.log(html.toLowerCase());
}

// Tester:
objHTTP.getHTML(requestOptions, printLowerCase)