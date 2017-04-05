

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
		checkPlayerAmount();
		
	} else {console.log("Please enter a valid number.");
		playerCount();}
};




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
var valueArray =[];
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
};

 var deck = function (){
	names = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
	suits = ['♥︎','♦︎','♠︎','♣︎'];


    
    for( var s = 0; s < suits.length; s++ ) {
        for( var n = 0; n < names.length; n++ ) {
            cards.push( new Card( n+1, names[n], suits[s] ) );
        }
    }    
//     
  }
// /*

// */

// //functions

var Player = function(cardArray) {
	this.cardArray = cardArray;
}

var getCardPos = function(){
	cardPos = Math.floor((Math.random() * cards.length) + 0);
	checkDrawnCards();
}


var checkDrawnCards = function() {
	for(var c in drawnCards) {
		if ( cardPos == drawnCards[c]){
			
			getCardPos();
		}

	}
}


var checkPlayerAmount = function() {
	for (var eachPlayer = 0; eachPlayer < numOfPlayers; eachPlayer++){
		dealCards();
	}
		

	
}

function dealCards() {
	// console.log(cards);
	//For each player that exists, execute this draw card fuction.
	//For each player, they must draw 5 cards.
		for (var x = 0; x <= cardHand - 1; x++) {
			//Find a random card from the shuffled deck
			getCardPos();
			drawnCards.push(cardPos);
			playerHand.push(cardPos);
			viewCards();


			
 		}


// 		var newHand = new Hand();
// 		//console.log(newHand);
// 		players.push(newHand);
// 		console.log(players);
// 		//Players
// 			//playerHand
// 				//object(value,name,suit)

// 		// console.log(playerHand);
// 		// console.log(playerHand[0][0].suit + playerHand[0][0].name)

// 		// players.push(playerHand);

// 		//
// 		// console.log("First card in player "+players[eachPlayer]+"'s hand: "+players[0].playerHand[0].Card.name);

// 		//empty playerHand container for a fresh new set of cards for a hand
// 		playerHand = [];
		
// 	}
// 	 //console.log(players)
// 	 //console.log((players[0][0].name) +" " + (players[0][0].suit));
// };

var newhand = new Player(playerHand);
		players.push(newhand);
			playerHand=[];

};


//


var viewCards = function() {
	
	for (var p in players) {
	for (var c in players[p].cardArray) {
		x=players[p].cardArray[c];
		x = cards[x];
		p = parseInt(p);
		c=parseInt(c);
		console.log("Player " + (p+1) + " " + "Card " + (c+1) + " is: " + x.name + " " +x.suit);

	}
}
	
};

var highCard = function() {
	// for (var p in players) {
	for (var c in players[0].cardArray) {
		x=players[0].cardArray[c];
		x = cards[x];
		// p = parseInt(p);
		// c=parseInt(c);
		

	valueArray.push(x.value);
	
	
}
//}
	console.log(valueArray);
	var results = Math.max(valueArray);
	console.log(results);
	//sort the cardArrays for each player
	//the highest value is the high card
	//display the actual card that represents that cardpsosition
};

var exitProgram= function() {
	console.log("You have exited the Card Suite!");
	process.exit();
};



//runners
// deck();
// checkPlayerAmount();

// viewCards();
// highCard();

/* Thoughts



1. Royal Flush - same suit A,K,Q,J,10
2. Straight Flush - same suit, 5 cards in a row
3. Four of a kind - same card values or names
4. Full House - 3 of a Kind plus 2 of a kind
5. Flush - 5 cards all same suit
6. Straight - 5 cards any suit in a row
7. Three of a kind - three cards of the same value
8. Two pair - 2 of the same value plus 2 of the same value
9. One pair - 2 of the same value
10. High Card-highest value


*/



var runProgram = function() {
	deck();
	welcomeScreen();
}();


