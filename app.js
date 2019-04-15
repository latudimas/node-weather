var express = require("express");
var app = express();
var request = require("request");

request(url, function(err, response, body) {
  if (err) {
    console.log('error:', error);
  } else {
		console.log('body:', body);
	}
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
