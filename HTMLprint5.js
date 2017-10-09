/* 20171009 DM - LHL w2d1

  Step 5 - Make it a Module - tester.

*/

// Poor varible name because it creates redundancy but following
//  the instructions.
var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

// function printHTML (html) {
//   console.log(html);
// }

// Tester:
getHTML.getHTML(requestOptions, getHTML.printHTML)