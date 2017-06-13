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

var getFormattedTime = function (fourDigitTime) {
    var hours24 = parseInt(fourDigitTime.substring(0, 2),10);
    var hours = ((hours24 + 11) % 12) + 1;
    var amPm = hours24 > 11 ? 'pm' : 'am';
    var minutes = fourDigitTime.substring(2);

    return hours + ':' + minutes + amPm;
};

//re-formats a number as $$
function showMeTheMoney(num) {
  return "$"+num.toFixed(2).toString();
}

function Prices(po) {
  //Variables
  var ticketPrice = 12.50;
  var taxPercent = .098;
  var totalPrice = 0;
  var kidTotal = 0;
  var adultTotal = 0;
  var seniorTotal = 0;
  var taxTotal = 0;
  var totalTotal = 0;

  // Adjust price for first run movies
  po.showing.firstRun === true ? ticketPrice+=2.5: ticketPrice=ticketPrice;

  // Adjust price for first run movies
  po.showing.time < 11 ? ticketPrice-=3: ticketPrice=ticketPrice;

  //determine total kid ticket prices
  if (po.tickets.toString().match(/kid/g) != null) {
    kidTotal = po.tickets.toString().match(/kid/g).length * (ticketPrice*.8);
  }
  //determine total adult ticket prices
  if (po.tickets.toString().match(/adu/g) != null) {
    adultTotal = po.tickets.toString().match(/adu/g).length * ticketPrice;}
  //determine total senior ticket prices
  if (po.tickets.toString().match(/sen/g) != null) {
    seniorTotal = po.tickets.toString().match(/sen/g).length * (ticketPrice*.9);}

  taxTotal= (kidTotal+adultTotal+seniorTotal)*taxPercent;
  totalTotal=(kidTotal+adultTotal+seniorTotal)+taxTotal;


  return [showMeTheMoney(kidTotal), showMeTheMoney(adultTotal), showMeTheMoney(seniorTotal), showMeTheMoney(taxTotal), showMeTheMoney(totalTotal), showMeTheMoney(ticketPrice*.8), showMeTheMoney(ticketPrice), showMeTheMoney(ticketPrice*.9) ];
}

var movieShows = [
  {id:0, movieName: "Bloodbath 4", time: 1000, firstRun: false},
  {id:0, movieName: "Bloodbath 4", time: 2300, firstRun: false},
  {id:1, movieName: "Wonder Woman", time: 1100, firstRun: true},
  {id:2, movieName: "Wonder Woman", time: 1400, firstRun: true},
  {id:3, movieName: "Snakes in Space", time: 1600, firstRun: false}
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

    //create our numbers to be shown in HTML
    var output = Prices(new PurchaseOrder(shows[showId], purchasedTix));
    $("#kid-Total").text(output[0]);
    $("#adult-Total").text(output[1]);
    $("#senior-Total").text(output[2]);
    $("#tax-Total").text(output[3]);
    $("#total-Total").text(output[4]);

    $("#row-Kid-Count").text(numOfChildTix);
    $("#row-Adult-Count").text(numOfAdultTix);
    $("#row-Senior-Count").text(numOfSeniorTix);

    $("#row-Kid-Price").text(output[5]);
    $("#row-Adult-Price").text(output[6]);
    $("#row-Senior-Price").text(output[7]);

    console.log(output);

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
