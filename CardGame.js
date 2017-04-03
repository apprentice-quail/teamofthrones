

//tools
var sget = require("sget");

//instantiate the input/output system
var userInput = require('readline');
var userPrompt = userInput.createInterface(process.stdin, process.stdout);

/* User Question Code (prompt)

userPrompt.question("", function(entry) {
	
});

*/


//sleep function
var sleep = function(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
};

//wipe  screen
var wipeScreen = function () {
  return process.stdout.write('\033c');
};



var welcomeScreen = function() {
	var gameSelection = sget("Welcome to the Cards Suite! What game would you like to play?\n (1) Poker\n(2) Quit").trim();
	if (gameSelection == 1) {
		dealCards();	
	} else if (gameSelection ==2) {
		exitProgram();
	} else { console.log("Listen fancypants, stop that.");
		welcomeScreen();
	}

};



//variables








//constructors








//functions








//runners


var exitProgram= function() {
	console.log("You have exited the Card Suite!");
	process.exit();
};




