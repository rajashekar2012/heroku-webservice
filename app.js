var express = require('express');
var AlexaSkill = require('./AlexaSkill');

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
   res.send(response);
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
	 res.send(alexaSampleSill());
	
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


/*========================= alexa ==============================*/
var alexaSampleSill=function  () {
	
	var APP_ID = "amzn1.ask.skill.b95e0641-ebd0-4cb0-9d3e-460eb29081da"; //replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";

	

	var GetFavoriteColor = function () {
	    AlexaSkill.call(this, APP_ID);
	};

	// Extend AlexaSkill
	GetFavoriteColor.prototype = Object.create(AlexaSkill.prototype);
	GetFavoriteColor.prototype.constructor = GetFavoriteColor;

	GetFavoriteColor.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
	    console.log("GetFavoriteColor onSessionStarted requestId: " + sessionStartedRequest.requestId
	        + ", sessionId: " + session.sessionId);
	    // any initialization logic goes here
	};

	GetFavoriteColor.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
	    console.log("GetFavoriteColor onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
	    var speechOutput = "Welcome to the Alexa Skills Kit, you can say hello";
	    var repromptText = "You can say hello";
	    response.ask(speechOutput, repromptText);
	};

	GetFavoriteColor.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
	    console.log("GetFavoriteColor onSessionEnded requestId: " + sessionEndedRequest.requestId
	        + ", sessionId: " + session.sessionId);
	    // any cleanup logic goes here
	};

	GetFavoriteColor.prototype.intentHandlers = {
	    // register custom intent handlers
	    "GetFavoriteColorIntent": function (intent, session, response) {
	        response.tellWithCard("Hello World!", "Hello World", "Hello World!");
	    },
	    "AMAZON.HelpIntent": function (intent, session, response) {
	        response.ask("You can say hello to me!", "You can say hello to me!");
	    }
	};

	// Create the handler that responds to the Alexa Request.
	exports.handler = function (event, context) {
	    // Create an instance of the GetFavoriteColor skill.
	    var GetFavoriteColor = new GetFavoriteColor();
	    GetFavoriteColor.execute(event, context);
	};

}