/* 20171009 DM - LHL w2d1

  Step 5 - Make it a Module - helper module.

  Note: the callback (printHTML), should have been in the other js file.

*/

var self = module.exports = {
  getHTML: function (options, callback) {
  /* Your code here */
  var https = require('https');
  // String to build the output from each chunk.
  var strMsg = ""

  /* Add your code here */
  // notice that https.get takes a callback with one parameter -
  // response, which is a Stream that represents the HTTP response
  https.get(options, function (response) {

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      //console.log('Chunk Received. Length:', data.length);
      // Console log each chunk of data.
      // console.log(data + "\n");
      // strMsg += data + "\n";
      strMsg += data;
    });

    // the callback is invoked when all of the data has been received
    response.on('end', function() {
      callback(strMsg);
     });
  });
},
printHTML: function (html) {
  console.log(html);
}

};