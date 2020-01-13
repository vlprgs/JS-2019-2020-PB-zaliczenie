var cards = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "joker", "Queen", "King"];
var types = ["club", "heart", "spade", "diamond"];
let darkmoonDeck = [];
let hand = [];
let handValues = []
let handTypes = []


//nested loop for pairing cards with type, then allocating it in single array as deck of cards


 function createDeck(){
  for (let i = 1; i <= cards.length+1; i++) {
    for (let y = 0; y <= types.length; y++) {
      let x = { type: y, value: i };
      darkmoonDeck.push(x);
    }
  }
  return darkmoonDeck;
}




// roll 5 cards
function rollDeck(){
for(let i=0; i<5; i++) {
    var handIndex = []
    handIndex.push(Math.floor(Math.random()*darkmoonDeck.length-1));
    hand.push(darkmoonDeck[handIndex]);
    darkmoonDeck.splice(handIndex, 1);
    }
    return hand
}


function revealHand(){
  for(let i=0; i<5; i++){
    handValues.push(hand[i].value)
    handTypes.push(hand[i].type)
  }
  return handTypes, handValues
}
  function isRoyalFlush(){
      if(handTypes[0] == handTypes[1] && handTypes[1] == handTypes[2] && handTypes[2] == handTypes[3] && handTypes[3] == handTypes[4] && handTypes.reduce((a, b) => a + b, 0) == 60){
        console.log("Royar Flush")
      } else {
        return false
      }
    }
  function isFlush(){
    if ( handTypes[0] == handTypes[1] && handTypes[1] == handTypes[2] && handTypes[2] == handTypes[3] && handTypes[3] == handTypes[4]){
      console.log("flush")
    } else {
      return false
    }
  }
  function isPair(){
    if ( handValues[0] == handValues[1] || handValues[1] == handValues[2] || handValues[2] == handValues[3] || handValues[3] == handValues[4]){
      console.log("pair")
    } else {
      return false
    }
  }
  function isTriples(){
    if ( handValues[0] == handValues[1] && handValues[1] == handValues[2]){
      console.log("triples")
    } else if ( handValues[1] == handValues[2] && handValues[2] == handValues[3]){
      console.log("triples")
    } else if ( handValues[2] == handValues[3] && handValues[3] == handValues[4]){
      console.log("triples")
    } else {
      return false
    }
  }


createDeck()
rollDeck()
console.log(hand)
isPair()
isTriples()
isFlush()
isRoyalFlush()
revealHand()
