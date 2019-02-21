require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

// var order = process.argv[3];

// --------------------------------------------------------------------------------------




// --------------------------------------------------------------------------------------

// switch(order) {
//   case concert:
// // Problems accessing the object to display nearest event


// var concert = require("axios");

// var artist = process.argv[3];

// concert.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(function(response) {
//   console.log(response.data);
// });

//   break;

//   case spotify:

var song = process.argv[3];

if(!song) {
  song = "The sign";
  artist = "Ace of Base";
}

spotify.search({ type: 'track', query: song, limit: '1'}, function(err, data) { if (err) {
    return console.log('Error occurred: ' + err);
  }
    console.log("================ Song =================\nArtist(s): "+data.tracks.items[0].artists[0].name+"\nSong's name: "+data.tracks.items[0].name+"\nLink from Spotify: "+data.tracks.items[0].external_urls.spotify+"\nAlbum: "+data.tracks.items[0].album.name);

});

// break;

//  case movie:

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

// case "do-what-it-says":

// }

