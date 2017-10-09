/* 20171009 DM - LHL w2d1

  Step 6 - Defining Callbacks - reverse

*/

var objHTTP = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse(html){
  var reverseHTML;

  for (var i = html.length; i > 0; i--){
    reverseHTML += html[i];
  }
  console.log(reverseHTML);
}

// Tester:
objHTTP.getHTML(requestOptions, printReverse)