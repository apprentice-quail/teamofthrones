

//tools
var sget = require("sget");




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

var numOfPlayers;

var welcomeScreen = function() {
	var gameSelection = sget("Welcome to the Cards Suite! What game would you like to play?\n(1)Poker\n(2)Quit").trim();
	if (gameSelection == 1) {
		playerCount();
		// dealCards();	
	} else if (gameSelection == 2) {
		exitProgram();
	} else { 
		console.log("Listen fancypants, stop that.");
		welcomeScreen();
	}

};

var playerCount = function() {
	var totalPlayers = sget("Select a number of players (2-7).").trim();
	if (totalPlayers.length >1){
		console.log("Please enter a number between 2-7.");
		playerCount();
	} else if (totalPlayers >=2 && totalPlayers<=7){
		console.log("You have selected " + totalPlayers + " players.");
		numOfPlayers = totalPlayers;
		teststuff();
	} else {console.log("Please enter a valid number.");
		playerCount();}
};

teststuff = function(){
	console.log(numOfPlayers);
}



//variables

// icons: ♣︎ ♦︎ ♥︎ ♠︎
// newDeck = [♣︎13♦13︎♥13︎♠13︎];
// shuffledDeck = [];
// discardPile = [];

var drawnCards = [];
var numOfPlayers = 1;
var players = []; 
var playerHand = [];
var cardHand = 5;
//
var name;
var suit;
var value;
var cards=[];
var drawnCard;
var cardPos=0;

//constructors

function Card(value, name, suit){
	this.value = value;
	this.name = name;
	this.suit = suit;
}

 var deck = function (){
	names = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
	suits = ['♥︎','♦︎','♠︎','♣︎'];
};

	
    
//     for( var s = 0; s < suits.length; s++ ) {
//         for( var n = 0; n < names.length; n++ ) {
//             cards.push( new Card( n+1, names[n], suits[s] ) );
//         }
//     }    
//     // return cards;
//     // console.log(cards);
//  }
// /*

// */

// //functions

var Player = function(cardArray) {
	this.cardArray = cardArray;
};

var getCardPos = function(){
	cardPos = Math.floor((Math.random() * cards.length) + 0);
	checkDrawnCards();
};


var checkDrawnCards = function() {
	for(var c in drawnCards) {
		if ( cardPos == drawnCards[c]){
			console.log("duplicate");
			getCardPos();
		}

	}
};


var checkPlayerAmount = function() {
	for (var eachPlayer = 0; eachPlayer < 2; eachPlayer++){
		dealCards();
	}
		

	
};

function dealCards() {
	// console.log(cards);
	//For each player that exists, execute this draw card fuction.
	//For each player, they must draw 5 cards.
		for (var x = 0; x <= cardHand - 1; x++) {
			//Find a random card from the shuffled deck
			
			getCardPos();		
		
			drawnCards.push(cardPos);

			playerHand.push(cardPos);
			console.log(playerHand);
		var newhand = new Player(playerHand);
		players.push(newhand);
			playerHand=[];
			
		
}
}




var exitProgram= function() {
	console.log("You have exited the Card Suite!");
	process.exit();
};



//runners
deck();
checkPlayerAmount();
console.log(players);
viewCards();



var runProgram = function() {
	welcomeScreen();
}();


