var targetNumber = Math.floor(Math.random() * 101) + 19;
console.log(targetNumber);

  $("#number-to-guess").text(targetNumber);
  
  
  var win = 0;
  var loss = 0;



  var counter = 0;

  var numberOptions = [1, 1, 1, 1]
  
  for (var i = 0; i < numberOptions.length; i++) {
      amount = Math.floor(Math.random() * 12) + 1;
      


    console.log(amount);

    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");

    
    imageCrystal.addClass("crystal-image");

   
    imageCrystal.attr("src", "../Gem-game/assets/images/Bag.png");

    
    imageCrystal.attr("data-crystalvalue", amount);

    
    $("#crystals").append(imageCrystal);
  };


  
  $(".crystal-image").on("click", function() {
      
      
      var crystalValue = ($(this).attr("data-crystalvalue"));
      crystalValue = parseInt(crystalValue);
      // We then add the crystalValue to the user's "counter" which is a global variable.
      // Every click, from every crystal adds to the global counter.
      counter += crystalValue;

      // All of the same game win-lose logic applies. So the rest remains unchanged.
    
      $("#current-score").text(counter);
      console.log(counter);

      if (counter === targetNumber) {
      alert("You win!");
      win++;
      $("#wins").text(win);
      initialize();
    }
    
    else if (counter >= targetNumber) {
        alert("Tough luck, the gems are mine!");
        loss++;
        $("#losses").text(loss);
        console.log(loss);
        initialize();
    }
    
    
});
