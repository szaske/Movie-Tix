//BUSINESS LOGIC
function Showing(movieName, time, firstRun) {
  this.movieName = movieName;
  this.time = time;
  this.firstRun = firstRun;
}

function PurchaseOrder(showing, tickets) {
  this.showing = showing;
  this.tickets = [];
}

var getFormattedTime = function (fourDigitTime) {
    var hours24 = parseInt(fourDigitTime.substring(0, 2),10);
    var hours = ((hours24 + 11) % 12) + 1;
    var amPm = hours24 > 11 ? 'pm' : 'am';
    var minutes = fourDigitTime.substring(2);

    return hours + ':' + minutes + amPm;
};

var movieShows = [
  {movieName: "Bloodbath 4", time: 1200, firstRun: false},
  {movieName: "Wonder Woman", time: 1400, firstRun: true},
  {movieName: "Snakes in Space", time: 1600, firstRun: false}
];

//UI LOGIC
$(document).ready(function() {
  // <select id="movie-Showings" class="input form-control address-type">
  //   <option data-time="1200" value="Bloodbath-4">Bloodbath 4, 12:00pm</option>
  //   <option data-time="1400" value="Bloodbath-4">Bloodbath 4, 2:00pm</option>
  // </select>
  console.log(getFormattedTime('1450'));
  movieShows.forEach(function(movieShow) {
    $("#movie-Showings").append("<option data-time='1200' value='" + movieShow.movieName + "'>" + movieShow.movieName + ", " + getFormattedTime(movieShow.time.toString())+"</option>)");
  });


  //validation on input text field
  $('.input').on('input', function() {
    console.log("what?",this);
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
