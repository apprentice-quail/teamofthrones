

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

// icons: ♣︎ ♦︎ ♥︎ ♠︎
// newDeck = [♣︎13♦13︎♥13︎♠13︎];
// shuffledDeck = [];
// discardPile = [];
numOfPlayers = 2;
players = []; 
playerHand = [];
cardHand = 5;
//
var name;
var suit;
var value;
var cards=[];

//constructors

function Card(value, name, suit){
	this.value = value;
	this.name = name;
	this.suit = suit;
};

 var deck = function (){
	names = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
	suits = ['♥︎','♦︎','♠︎','♣︎'];
	
    
    for( var s = 0; s < suits.length; s++ ) {
        for( var n = 0; n < names.length; n++ ) {
            cards.push( new Card( n+1, names[n], suits[s] ) );
        }
    }    
    // return cards;
    // console.log(cards);
 }
/*

*/

//functions

function dealCards() {
	// console.log(cards);
	//For each player that exists, execute this draw card fuction.
	for (var eachPlayer = 0; eachPlayer <= numOfPlayers; eachPlayer++) {
		//For each player, they must draw 5 cards.
		for (var x = 0; x <= cardHand - 1; x++) {
			//Find a random card from the shuffled deck
			var cardPos = Math.floor((Math.random() * cards.length) + 0);

			// console.log("Deck Position: "+cardPos);
			//Take the card from that position

			// console.log(cards[cardPos]);
			var drawnCard = cards.splice(cardPos,1);

			//drawn card
			// console.log("Card drawn is: "+drawnCard);

			//Place that card into the player's hand.
			playerHand.push(drawnCard);
			
			
		}


		//Players
			//playerHand
				//object(value,name,suit)

		// console.log(playerHand);
		console.log(playerHand[0][0].suit + playerHand[0][0].name)

		players.push(playerHand);

		//
		// console.log("First card in player "+players[eachPlayer]+"'s hand: "+players[0].playerHand[0].Card.name);

		//empty playerHand container for a fresh new set of cards for a hand
		playerHand = [];
		
	}
	// console.log("Check 3");
}


var exitProgram= function() {
	console.log("You have exited the Card Suite!");
	process.exit();
};



//runners
deck();
dealCards();





