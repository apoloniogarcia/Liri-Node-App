
var request = require("request");
var keys = require("./keys.js");
var twitterCredentials = keys.twitterKeys;
var command = process.argv[2];
var query = process.argv[3];


//twitter function

function myTwitter(){

	var Twitter = require('twitter');
 
	var client = new Twitter({
  		consumer_key: 'PPea2cHtLsSgC7ekC7guRtFnM',
  		consumer_secret: '6aLCfBuwH7Q2vIrERsAy1ohpzT217YTNLwFZ5BaByHIq0WfMnw',
  		access_token_key: '953335252008644609-I4mvVGLBxdoiVr94dY69N9EKj29lOoy',
  		access_token_secret: 'gAb7BepO35KIVkaL0uYCruTHLQX8UV5VJEuOsL1iGFm7w'
	});
 
	var params = {screen_name: 'BCapplegarcia'};

	client.get('statuses/user_timeline', params, function(error, tweets, response) {
		if(error) { // if there IS an error
			console.log('Error occurred: ' + error);
		} else { // if there is NO error
	  	console.log("Apple's Most Recent Tweets");
	  	console.log("");

	  	for(var i = 0; i < tweets.length; i++) {
	  		console.log("#" + (i + 1) + " - " + tweets[i].text);
	  		console.log("");
	  	}
	  }
	});
}

//spotify function


function spotifySong(){

	var Spotify = require('node-spotify-api');
 
	var spotify = new Spotify({
  		id: b7d32a7112a54ad28670928556ceadc1,
		secret: a3f0297daf6d4c0089d249ab5fa9bf66
});
 
	spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  		if (err) {
    	return console.log('Error occurred: ' + err);
  }
	console.log(data); 
});
}


//OMDB FUNCTION



//Command prompt

if(command === "my-tweets") {
	myTwitter();
} else if(command === "spotify-this-song") {
	spotifySong(query);
} else if(command === "movie-this") {
	movieThis(query);
} else if(command === "do-what-it-says") {
	
	
	var fs = require("fs");

	fs.readFile("random.txt", "utf-8", function(error, data) {
		var command;
		var query;

	/
		if(command === "my-tweets") {
			myTwitter();
		} else if(command === "spotify-this-song") {
			spotifySong(query);
		} else if(command === "movie-this") {
			movieThis(query);
		} else { 
			console.log("Command from file is not a valid command! Please try again.")
		}
	});
} else if(command === undefined) {
	console.log("Please enter a command to run LIRI.")
} else {
	console.log("Command not recognized! Please try again.")
}