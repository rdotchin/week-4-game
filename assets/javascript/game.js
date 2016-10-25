$(document).ready(function() {
//Global Variables
//--------------------------------------------------------------------
var pink = $('#pinkGem');
var blue = $('#blueGem');
var green = $('#greenGem');
var ruby = $('#rubyGem');
var totalNumber = 0;
var pinkNumber = [];
var blueNumber = [];
var greenNumber = [];
var rubyNumber = [];
var totalScore = 0;
var wins = 0;
var loss = 0;
var addPink = pinkNumber + totalScore;


//functions
//--------------------------------------------------------------------

//generates number for randomNumber
function randomTotal () {
	var randomNumber = $("#randomNumber")
	totalNumber = Math.floor(Math.random() * 120) + 19;
	return $("#randomNumber").append(totalNumber);
}


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
}

//add the gem clicked to the total score
function add(number) {
	totalScore = totalScore + number;
	console.log(totalScore);
	$("#totalNumber").html(totalScore);
	console.log(totalNumber);
	return  
}

function checkScore (computer, user) {
	if (user === computer) {
		wins++;
		init();
	}
	else if (user > computer) {
		loss++;
		init()
	}
}

//Starts and resets game
function init() {
var totalNumber = [];
var pinkNumber = [];
var blueNumber = [];
var greenNumber = [];
var rubyNumber = [];
var totalScore = [];
randomTotal();
gemNumbers();


}

//Main Process
//--------------------------------------------------------------------

//start game
init();


//pinkGem click
$("#pinkGem").on("click", function() {
	add(pinkNumber);
	/*return $("#totalScore").append(pinkNumber)*/
});

//blueGem click
$("#blueGem").on("click", function() {
	add(blueNumber);
});

//greenGem click
$("#greenGem").on("click", function() {
	add(greenNumber);
});

//rubyGem click
$("#rubyGem").on("click", function() {
	add(rubyNumber);
});



console.log(totalScore);
console.log(totalNumber);




//win
if (totalScore == totalNumber) {
	wins++;
	console.log(wins);
	init();

}
//loss
if (totalScore > totalNumber) {
	loss++;
	init();
}


});