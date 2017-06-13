


$(document).ready(function() {

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
