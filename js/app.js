
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	var clickTotal = 0;	
  	var number = 0;
  	var guess = 0;

	function randomNumber() {

		var number = 1 + Math.floor(Math.random() * 100);
		return number;

	}

  	$("#guessButton").click(function() {
  		event.preventDefault();
  		var guess = $("#userGuess").val();
  		return guess;
  	});



/*  	function evaluateGuess() {
  		if (guess -  )


  }*/

  	function countClicks(clickTotal) {
  		event.preventDefault();
  		$("#guessButton").click(function() {
  		clickTotal++;
  		return $("#count").text(clickTotal);
  		});
  	}	

  	randomNumber();
  	countClicks(clickTotal);

  function getDifference (guess, number) {
  		return Math.abs(guess-number);
  	}
  //console.log(getDifference(100, 50));

  var difference =  10;//getDifference(guess, number);
  console.log(difference);

  if (difference == 0) {
  	 $("#feedback").text("You won!");
  }

  else if (difference > 50) {
  	$("#feedback").text("You're freezing.");
  } 

  else if (difference > 30) {
  	$("#feedback").text("You're cold.");
  }

  else if (difference > 20) {
  	$("#feedback").text("Getting warmer...");
  }

  else if (difference > 10) {
  	$("#feedback").text("hot.");
  }

  else if (difference <= 10){
  	$("#feedback").text("BURNING HOT!!!");
  }

  else {
  	$("#feedback").text("You did something wrong.");

  }










/*
  	function newGame() {
	var num = random(); //creates a random number between 1 and 100
	var guess = prompt("enter a number");
	if (guess - num == 0) {
	return "You win!";
	}
	else if (guess - num < 10){
	return "You're hot!";
	}
	else {
	return "You're cold :(";
	}




  	}

*/
});


