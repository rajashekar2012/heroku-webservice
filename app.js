var express = require('express');
var app = express();

//var cool = require('cool-ascii-faces');
//var express = require('express');
//var app = express();

//app.set('port', (process.env.PORT || 5000));

//app.use(express.static(__dirname + '/public'));

// views is directory for all template files
//app.set('views', __dirname + '/views');
//app.set('view engine', 'ejs');

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.send('Hello GET');
})

// This responds a POST request for the homepage
app.post('/', function (req, res) {
	
	// var response={
		// outputSpeech:{
			// type:"PlainText",
			// text:"Hello World"
		// },
		// card{
			// type:"Simple",
			// title:"sample title",
			// content:"content"
		// },
		// repromt:{
			// outputSpeech:{
				// type:"PlainText",
				// text:"hello world repromt"
			// }
		// },
		// shouldEndSession:true
	// }
	// res.send(JSON.parse(response));
	
   console.log("Got a POST request for the homepage");
   res.send('Hello POST');
})

// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
   console.log("Got a DELETE request for /del_user");
   res.send('Hello DELETE');
})

// This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
	
	// var response={
		// outputSpeech:{
			// type:"PlainText",
			// text:"Hello World Get"
		// },
		// card{
			// type:"Simple",
			// title:"sample title",
			// content:"content"
		// },
		// repromt:{
			// outputSpeech:{
				// type:"PlainText",
				// text:"hello world repromt Get"
			// }
		// },
		// shouldEndSession:true
	// }
	// res.send(JSON.parse(response);
	
   console.log("Got a GET request for /list_user");
   res.send('Page Listing');
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {   
   console.log("Got a GET request for /ab*cd");
   res.send('Page Pattern Match');
})


var server = app.listen(app.get('port'), function () {

var port_ = process.env.PORT || 4545;
var server = app.listen(port_, function () {


console.log('Node app is running on port', app.get('port'));
   //var host = server.address().address
  // var port = server.address().port


  // console.log("Example app listening at http://%s:%s", host, port)
})

   console.log("Example app listening at http://%s:%s", host, port)
})

