

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

//wipe screen
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

//icons: ♣︎ ♦︎ ♥︎ ♠︎
//newDeck = [♣︎13♦13︎♥13︎♠13︎];
//shuffledDeck = [];
//discardPile = [];
//players = [];
//cardHand = 5;
//




//constructors

/*





*/

//functions

/*function dealCards() {
	//For each player that exists, execute this draw card fuction.
	for (int i in numOfPlayers) {
		//For each player, they must draw 5 cards.
		for (int x in cardHand)
			//Find a random card from the shuffled deck
			var cardPos = Math.floor((Math.random() * shuffledDeck.length()) + 1);
			//Take the card from that position
			var drawnCard = shuffledDeck.shift(cardPos);
			//Place that card into the player's hand.
			players[i].push(drawnCard);

			
		}
		
	}

}




*/

//runners


var exitProgram= function() {
	console.log("You have exited the Card Suite!");
	process.exit();
};




