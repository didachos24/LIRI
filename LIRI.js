require("dotenv").config();

var keys = require("./keys.js");

// var order = process.argv[3];

// --------------------------------------------------------------------------------------


  var concert = require("axios");
  var artist = process.argv[3];

  concert.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(function(response) {
    console.log(response.data);
  });


// --------------------------------------------------------------------------------------

// switch(order) {
//   case concert:

//   var concert = require("axios");

//   concert.get("https://rest.bandsintown.com/artists/" + process.argv[3] + "/events?app_id=codingbootcamp").then(function(response) {
//     console.log(response.data);
//   });
  
//   break;

//   case spotify:

//   var spotify = new spotify(keys.spotify);

//   var spotify = require("node-spotify-api");

//   spotify.search({ type: 'track', query: process.argv[3]}, function(err, data) {
//     if (err) {
//       return console.log('Error occurred: ' + err);
//     }
  
//   console.log(data); 
//   });

//   break;

//   case movie:

// var movie = require("axios");

// var title = process.argv[3];

// if(title == null) {
//   title = "Mr.+Nobody";
// }

// movie.get("http://www.omdbapi.com/?t="+title+"&apikey=trilogy").then(
// function(response) {
//   console.log("================ Movie =================\nTitle: "+response.data.Title+"\nYear: "+response.data.Year+"\nIMDB Rating: "+response.data.imdbRating+"\nCountry: "+response.data.Country+"\nLanguage: "+response.data.Language+"\nPlot: "+response.data.Plot+"\nActors: "+response.data.Actors);

// })

// break;

// }

