$(document).ready(function() {
	//Global Variables
	//--------------------------------------------------------------------
	
	var totalNumber = 0;
	var pinkNumber = [];
	var blueNumber = [];
	var greenNumber = [];
	var rubyNumber = [];
	var totalScore = 0;
	var wins = 0;
	var loss = 0;


	//functions
	//--------------------------------------------------------------------

	//generates number for randomNumber
	function randomTotal () {
		var randomNumber = $("#randomNumber")
		totalNumber = Math.floor(Math.random() * 120) + 19;
		return $("#randomNumber").html(totalNumber);
	};


	//gets and assigns random numbers for all four gems
	function gemNumbers() {
		var gemNumber = Math.floor(Math.random() * 12) +1;
		pinkNumber = gemNumber
		var gemNumber2 = Math.floor(Math.random() * 12) +1;
		blueNumber = gemNumber2
		var gemNumber3 = Math.floor(Math.random() * 12) +1;
		greenNumber = gemNumber3
		var gemNumber4 = Math.floor(Math.random() * 12) +1;
		rubyNumber = gemNumber4
	};

	//add the gem clicked to the total score
	function add(number) {
		totalScore = totalScore + number;
		console.log(totalScore);
		$("#totalNumber").html(totalScore);
		console.log(totalNumber);
		return  
	};

	/*checks the user score compared to the computer and when the computer number
	is reached or exceeded will update win/loss and reset the game with init()*/
	function checkScore (computer, user) {
		if (user === computer) {
			wins++;
			$("#wins").html("Wins: " + wins);
			init();
		}
		else if (user > computer) {
			loss++;
			$("#loss").html("Losses: " + loss);
			init()
		}
	};

	//resets the users total score
	function resetUser () {
		totalScore = 0;
		return $("#totalNumber").html(totalScore);
	};

	//Resets and starts the game
	function init() {
		randomTotal();
		gemNumbers();
		resetUser();
	};



	//Main Process
	//--------------------------------------------------------------------

	//start game
	init();

	/*when a gem is clicked the function calls add() to add that number to the
	total score and checkScore() to see if the computer number has been reached
	or surpassed*/

	//pinkGem click function
	$("#pinkGem").on("click", function() {
		add(pinkNumber);
		checkScore(totalNumber, totalScore);
	});

	//blueGem click function
	$("#blueGem").on("click", function() {
		add(blueNumber);
		checkScore(totalNumber, totalScore);
	});

	//greenGem click function
	$("#greenGem").on("click", function() {
		add(greenNumber);
		checkScore(totalNumber, totalScore);
	});

	//rubyGem click function
	$("#rubyGem").on("click", function() {
		add(rubyNumber);
		checkScore(totalNumber, totalScore);
	});


});