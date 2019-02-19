require("dotenv").config();

var keys = require("./keys.js");

var concert = require("axios");
var spotify = require("node-spotify-api");

// var spotify = new spotify(keys.spotify);

concert.get("https://rest.bandsintown.com/artists/" + process.argv[3] + "/events?app_id=codingbootcamp").then(function(response) {
  console.log(response.data);
});

spotify.search({ type: 'track', query: process.argv[3]}, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});