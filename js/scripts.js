//BUSINESS LOGIC
function Showing(id,movieName, time, firstRun) {
  this.id = id;
  this.movieName = movieName;
  this.time = time;
  this.firstRun = firstRun;
}

function PurchaseOrder(showing, tickets) {
  this.showing = showing;
  this.tickets = tickets;
}

// function Ticket(type,show) {
// this.type = type;
// this.show = show;
// }

var getFormattedTime = function (fourDigitTime) {
    var hours24 = parseInt(fourDigitTime.substring(0, 2),10);
    var hours = ((hours24 + 11) % 12) + 1;
    var amPm = hours24 > 11 ? 'pm' : 'am';
    var minutes = fourDigitTime.substring(2);

    return hours + ':' + minutes + amPm;
};

function Prices(po) {

}

var movieShows = [
  {id:0, movieName: "Bloodbath 4", time: 1200, firstRun: false},
  {id:1, movieName: "Wonder Woman", time: 1400, firstRun: true},
  {id:2, movieName: "Snakes in Space", time: 1600, firstRun: false}
];

//empty array for all showings
var shows = [];

movieShows.forEach(function(movieShow) {
  shows.push(new Showing(movieShow.id, movieShow.movieName, movieShow.time, movieShow.firstRun));
});

//UI LOGIC
$(document).ready(function() {

  //auto generates the list of showings drop down
  console.log(shows[0].movieName);
  movieShows.forEach(function(movieShow) {
    $("#movie-Showings").append("<option data-id='"+movieShow.id+"' data-time='"+ movieShow.time +"' value='" + movieShow.movieName + "'>" + movieShow.movieName + ", " + getFormattedTime(movieShow.time.toString())+"</option>)");
  });
  //validation on input text field
  $('.input').on('input', function() {
    var numOfChildTix = $("#childTickets").val();
    var numOfAdultTix = $("#adultTickets").val();
    var numOfSeniorTix = $("#seniorTickets").val();
    var movieSelection = $("#movie-Showings").val();
    var showId = $("#movie-Showings option:selected").data("id");
    var movieTime = $("#movie-Showings option:selected").data("time");

    //create a ticket for each person
    var purchasedTix = [];
    for (var index = 0; index < numOfChildTix; index++){
      //create 3 kid tickets
      purchasedTix.push("kid");
      // create purchase order from
    }
    for (var index = 0; index < numOfAdultTix; index++){
      //create 3 kid tickets
      purchasedTix.push("adult");
      // create purchase order from
    }
    for (var index = 0; index < numOfSeniorTix; index++){
      //create 3 kid tickets
      purchasedTix.push("senior");
      // create purchase order from
    }

    //create a showing
    var po = new PurchaseOrder(shows[showId], purchasedTix);

    console.log(po);



    //create a purchase order from array of tickets

    //send purchase order to the prices function, which returns 4 strings


  	// var input=$(this);
    // var re = /(?!^\d+$)^.+$/;
    // if (input.val()<1 || input.val()>1000 || input.val().match(re) ){
    //   $("#submitButton").prop('disabled', true);
    //   input.popover('show');}
    // else {
    //   $("#submitButton").prop('disabled', false);
    //   input.popover('hide');
    // }
  }); // end of input event listener
  $("#form-Tix").submit(function(event) {
    event.preventDefault();
    console.log('purchase called');

  });
});
