function rollDice(){
    var die1 = Math.floor(Math.random() * 6) +1;
    var die2 = Math.floor(Math.random() * 6) +1;
    return[die1, die2];
  }
  
  function playCraps() {
    var done = false;
    var state = 1;
    var point;
    while(!done){
      switch(state) {
        case 1:
          var roll = rollDice();
          var sum = roll[0] + roll[1];
          $("#out").append(roll[0] + ", " + roll[1] + "<br/>");
          if(sum == 7|| sum == 11){
            state = 2;
          } else {
            point = sum;
            state = 3;
          }
          break;
        case 2:
          $("#out").append("You win!");
          done = true;
          break;
        case 3:
           var roll = rollDice();
          var sum = roll[0] + roll[1];
          $("#out").append(roll[0] + ", " + roll[1] + "<br/>");
          if (sum == point) {
            state = 2;
          } else if (sum == 7) {
            state = 4;
          } else {
            state = 3;
          }
          break;
        case 4:
          $("#out").append("You are a loser. #sad <br/>");
          done = true;
          break;
        case 5:
          
          
          break;
        default:
          // dead code
                 }
      
    }  
  }
  
  $("#play").click(playCraps);