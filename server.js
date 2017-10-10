
// init project
var express = require('express');
var app = express();

//serve files in 'public' folder as static
app.use(express.static('public'));

//information page
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

//get everything after '/' and store in date
app.get("/:date", function (request, response) {
  var dateString = request.params.date, date, dateObj;
  if(isNaN(Number(dateString))){ //not number, not a unix epoch
    if(isNaN(Date.parse(dateString))) { //if it's not a valid date string
      dateObj = {
          "unix": null,
          "natural": null
      };
    }
    else{ //valid date string
      date = new Date(dateString);
      dateObj = {
          "unix": date.getTime()/1000, //convert ms to seconds
          "natural": formatDate(date)
      };
    }
  }
  else{ //unix epoch
    date = new Date(Number(dateString)*1000); //convert ms to seconds
    dateObj = {
          "unix": Number(dateString),
          "natural": formatDate(date)
    };
  }
  response.json(dateObj);
});

// listen for requests
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

//convert date to readable string
function formatDate(date) {
  var months = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];
  
  return months[date.getMonth()] + " " + date.getUTCDate() + ", " + date.getFullYear();
}
