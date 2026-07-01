let player1="rock";
let player2="paper";

if (player1 === player2){
    console.log("draw");
} else if (
 (player1 === "rock" && player2 === "scissor" ) ||
 (player1 === "paper" && player2 === "rock" ) || 
 (player1 ===  "scissor" && player2 === "paper" )){
    console.log("player 1 win");
 } else {
    console.log("player 2 win");
 }
