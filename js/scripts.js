$(document).ready(function(){

  function translator(number){
    for (var i = number; i >= 0; i--){

    }

  }    // Closing brace for Function translator




  $("#form-1").submit(function(event){
    event.preventDefault();

    var userInput = $("#form-field").val();


    $("#results-text").text();     // add translator function output here
    $(".results").show();



  });   //End of form

});
