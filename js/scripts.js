$(document).ready(function(){

  function translator(number){
    for (var i = number; i >= 0; i--){

    }
    return number;
  }                               // Closing brace for Function translator








  $("#form-1").submit(function(event){
    event.preventDefault();




    var userInput = $("#form-field").val();




    $("#results-text").empty().append(translator(userInput));     // add translator function output
    $(".results").show();





  });   // Closing brace for form // ERASE ME!!!!!

});





console.log("Tester line. make sure to erase me from within project -wherever I am!")

var testString = "I am a tester - to be erased later";
