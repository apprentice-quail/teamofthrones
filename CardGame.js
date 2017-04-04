

//tools
var sget = require("sget");

//instantiate the input/output system
// var userInput = require('readline');
// var userPrompt = userInput.createInterface(process.stdin, process.stdout);

/* User Question Code (prompt)

userPrompt.question("", function(entry) {
	
});

*/
var exitProgram= function() {
	console.log("You have exited the Card Suite!");
	process.exit();
};

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
// var drawnCards = [];
// numOfPlayers = 1;
// players = []; 
// playerHand = [];
// cardHand = 5;
// //
// var name;
// var suit;
// var value;
// var cards=[];
// var drawnCard;

// //constructors

// function Card(value, name, suit){
// 	this.value = value;
// 	this.name = name;
// 	this.suit = suit;
// };

//  var deck = function (){
// 	names = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
// 	suits = ['♥︎','♦︎','♠︎','♣︎'];
	
    
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


// var checkDrawnCards = function() {
// 	for(var c in drawnCards) {
// 		if ( cardPos != drawnCards[c]){
// 			dealCards();
// 		}
// 	}
// }
// function dealCards() {
// 	// console.log(cards);
// 	//For each player that exists, execute this draw card fuction.

// 	for (var eachPlayer = 0; eachPlayer <= numOfPlayers; eachPlayer++) {
// 		//For each player, they must draw 5 cards.
// 		for (var x = 0; x <= cardHand - 1; x++) {
// 			//Find a random card from the shuffled deck
// 			var cardPos = Math.floor((Math.random() * cards.length) + 0);

// 			checkDrawnCards();
// 			 //console.log("Deck Position: "+cardPos);
// 			//Take the card from that position

// 			// console.log(cards[cardPos]);
// 			drawnCards.push(cardPos);


			
// 			//drawn card
			

// 			//Place that card into the player's hand.
// 			playerHand.push(cardPos);

			
// 		}

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


// // var fourOfKind = function(){
// // 	if ((players[i].c1.value ===players[i].c2.value ===players[i].c3.value ===players[i].c4.value)) {
// // 		console.log("P-O-K-E-R");
// // 	}


// // var pair = function() {
// // 	console.log(players[0].c1[0].value);
// // 	for (p in players) {
// // 		for(var c=0; c<5; c++) {
// // 			console.log(players[p].c1[c].value);
// // 		}
		
// 	// if((players[p].c1.value ==players[p].c2.value) ||
// 	// 	(players[p].c1.value==players[p].c3.value) ||
// 	// 	(players[p].c1.value==players[p].c4.value) ||
// 	// 	(players[p].c1.value==players[p].c5.value)) //||
// 		// (players[p].c2.value==players[p].c3.value) ||
// 		// (players[p].c2.value==players[p].c4.value)	||
// 		// (players[p].c2.value==players[p].c5.value)	||
// 		// (players[p].c3.value==players[p].c4.value)	||
// 		// (players[p].c3.value==players[p].c5.value)	||
// 		// (players[p].c4.value==players[p].c5.value)	) {
		
// // 	}
	
// // }

// //runners
// deck();
// dealCards();
// viewHand();
//pair();
//fourOfKind();

/* Thoughts

1. pull the console log of the cards out to another function to make it easier to view individual hands later
2. nested for loops like the deck function to print those out
3.  Poker scenarios

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
	welcomeScreen();
}();


