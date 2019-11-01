$(document).ready(function(){

  var results = "";

  function translator(number){
    for (var i = 0; i <= number; i++){
      i += "";
      if (i === "0"){
        results += '"0", ';       // Example in instructions has 0 in quotes in addition to strings
      }
      else if (i.includes(3) === true){
        results += '"I\'m sorry, Dave. I\'m afraid I can\'t do that.", ';
      }
      else if (i.includes(2) === true){
        results += '"Boop!", ';
      }
      else if (i.includes(1) === true){
        results += '"Beep!", ';
      }
      else {
        results += i + ", ";
      }
    }
    return results;
  }



  $("#form-1").submit(function(event){
    event.preventDefault();

    var userInput = $("#form-field").val();

    $("#results-text").empty().text(translator(userInput));
    $(".results").show();

    results = "";

  });
});
