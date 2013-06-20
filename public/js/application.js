$(document).ready(function() {
  var currentKey = 1;
  var wrongKeys = 0;
  var length = $('span#count').text();
  $('p#textarea span:nth-Child(1)').addClass("current");


  $(document).keydown(function(e){
    if (e.keyCode === 8) {
      e.preventDefault();
      } 
  });

  $(document).keypress(function(e){

    if (currentKey == length){
      var results = "<div class='container'><h2>Results:</h2><p>"+wrongKeys+" Wrong</p><p>"+ (length - wrongKeys) +" Correct</p><p>"+length+" Total</p><div>";
      $(".container").after(results);
    }

    if (e.which === $(".current").text().charCodeAt() ) {
      currentKey += 1;
      $(".current").removeClass("current");
      $(".wrong").removeClass("wrong");
      $('#textarea span:nth-Child('+ currentKey +')').addClass("current");
    }
    else {
      $(".current").addClass("wrong");
      wrongKeys +=1;
    }
  });


});


// COMMAND = 91
// SHIFT = 16
// CONTROL = 17
// CAPS = 20
// ALT/OPTION = 18
// BACKSPACE = 8
