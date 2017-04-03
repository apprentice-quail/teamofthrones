

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
	this.names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
	this.suits = ['Hearts','Diamonds','Spades','Clubs'];
	
    
    for( var s = 0; s < this.suits.length; s++ ) {
        for( var n = 0; n < this.names.length; n++ ) {
            cards.push( new Card( n+1, this.names[n], this.suits[s] ) );
        }
    }

    
    //return cards;
    console.log(cards);
 }
/*

//



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






