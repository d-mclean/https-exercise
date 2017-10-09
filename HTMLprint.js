/* 20171009 DM - LHL w2d1


*/
// Include built-in module for http stuff.
var https = require('https');

// Step 1 - Printing in Chunks
function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Add your code here */
  // notice that https.get takes a callback with one parameter -
  // response, which is a Stream that represents the HTTP response
  https.get(requestOptions, function (response) {

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      //console.log('Chunk Received. Length:', data.length);
      // Console log each chunk of data.
      console.log(data + "\n");
    });

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      console.log('Response stream complete.');
    });

  });
}

// Tester.
getAndPrintHTMLChunks();