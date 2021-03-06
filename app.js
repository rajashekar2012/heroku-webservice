var express = require('express');
var app = express();


// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.send('Hello GET');
})

// This responds a POST request for the homepage
app.post('/', function (req, res) {
   console.log("Got a POST request for the homepage");
   res.send('Hello POST');
})


// This responds a POST request for the homepage
app.post('/alexaService', function (req, res) {

	/* var response={
	outputSpeech: {
		type: "PlainText",
		text: "Hello World Get"
	},
	card: {
		type: "Simple",
		title: "sample title",
		content: "content"
	},
	repromt: {
		outputSpeech: {
			type: "PlainText",
			text: "hello world repromt Get"
		}
	},
	shouldEndSession: true
}*/

   console.log("Got a POST request for the Amazon");
   res.send('Welcome to alexaService');
   //res.send('Welcome to alexaService');
})


// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
   console.log("Got a DELETE request for /del_user");
   res.send('Hello DELETE');
})

// This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
	
	 var response={
	outputSpeech: {
		type: "PlainText",
		text: "Hello World Get"
	},
	card: {
		type: "Simple",
		title: "sample title",
		content: "content"
	},
	repromt: {
		outputSpeech: {
			type: "PlainText",
			text: "hello world repromt Get"
		}
	},
	shouldEndSession: true
}
	 
	 console.log("Got a GET request for /list_user");
	 res.send("my fav color is red");
	
   //console.log("Got a GET request for /list_user");
  // res.send('Page Listing');
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {   
   console.log("Got a GET request for /ab*cd");
   res.send('Page Pattern Match');
})
var port_ = process.env.PORT || 4545;
var server = app.listen(port_, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
