let bagOfBalls = [1,1,1,1,1,1,1,1];
let leftSide =[];
let rightSide = [];

let upgradeToStellBall = Math.floor(Math.random()*bagOfBalls.length)
bagOfBalls[upgradeToStellBall] = bagOfBalls[upgradeToStellBall] +1

function ballRoll(array, side){
 for(let i=0; i<=2; i++){
     ballIndex = Math.floor(Math.random()*array.length)
     side.push(array[ballIndex]);
     array.splice(ballIndex, 1)
 }
 return side
}

console.log(upgradeToStellBall)
console.log(bagOfBalls)

let firstRoll = ballRoll(bagOfBalls, leftSide);
let secondRoll = ballRoll(bagOfBalls, rightSide);

console.log(firstRoll);
console.log(secondRoll);

function identifyBigBall(){
if (firstRoll.reduce((a, b) => a + b, 0) == secondRoll.reduce((a, b) => a + b, 0)){
    console.log("wszystkie kule sa rowne, dodaje ostatnie 2")
    let firstRoll = ballRoll(bagOfBalls, leftSide);
    let secondRoll = ballRoll(bagOfBalls, rightSide);
    identifyBigBall()

}else if (firstRoll.reduce((a, b) => a + b, 0) > secondRoll.reduce((a, b) => a + b, 0)){
    let heaviestBall = firstRoll.indexOf(Math.max.apply(Math, firstRoll))
    console.log("indeks najciezszej kuli to" + " "+ firstRoll[heaviestBall] + " po pierwszej stronie")
}else {
    let heaviestBall = secondRoll.indexOf(Math.max.apply(Math, secondRoll))
    console.log("indeks najciezszej kuli to" + " "+ secondRoll[heaviestBall] + " po drugiej stronie")
}
}
identifyBigBall()
console.log(bagOfBalls)