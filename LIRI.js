require("dotenv").config();

var keys = require("./keys.js");

// var order = process.argv[3];

// --------------------------------------------------------------------------------------




// --------------------------------------------------------------------------------------

// switch(order) {
//   case concert:

// var concert = require("axios");
// var moment = require("moment");

// var artist = process.argv[3];

// concert.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(function(response) {
  
// var date = response.data[0].datetime;
// date = moment(date).format('MM/DD/YYYY');

//   console.log("\n================ Concert =================\n\nVenue: "+response.data[0].venue.name+"\nLocation: "+response.data[0].venue.city+", "+response.data[0].venue.region+", "+response.data[0].venue.country+"\nDate: "+date);

// });

//   break;

//   case spotify:

// var Spotify = require('node-spotify-api');

// var spotify = new Spotify(keys.spotify);

// var song = process.argv[3];

// if(!song) {
//   song = "The sign";
//   artist = "Ace of Base";
// }

// spotify.search({ type: 'track', query: song, limit: '1'}, function(err, data) { if (err) {
//     return console.log('Error occurred: ' + err);
//   }
//     console.log("\n================ Song =================\n\nArtist(s): "+data.tracks.items[0].artists[0].name+"\nSong's name: "+data.tracks.items[0].name+"\nLink from Spotify: "+data.tracks.items[0].external_urls.spotify+"\nAlbum: "+data.tracks.items[0].album.name);

// });

// break;

//  case movie:

// var movie = require("axios");

// var title = process.argv[3];

// if(title == null) {
//   title = "Mr.+Nobody";
// }

// movie.get("http://www.omdbapi.com/?t="+title+"&apikey=trilogy").then(
// function(response) {
//   console.log("\n================ Movie =================\n\nTitle: "+response.data.Title+"\nYear: "+response.data.Year+"\nIMDB Rating: "+response.data.imdbRating+"\nCountry: "+response.data.Country+"\nLanguage: "+response.data.Language+"\nPlot: "+response.data.Plot+"\nActors: "+response.data.Actors);

// })

// break;

// case "do-what-it-says":

// }

