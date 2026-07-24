function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0 ) {
        return "rock";
    } else if (randomNumber === 1){
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let playerInput = prompt(("Enter rock, paper or scissors"));
    return playerInput.toLowerCase();

}



 function playGame(){
    let humanScore = 0;
    let computerScore = 0;

function playRound(humanChoice, computerChoice) {
     if (humanChoice === computerChoice) {
         return "tie";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") ||
     (humanChoice === "scissors" && computerChoice === "paper")
     ){ 
        return "human";
     } else  {
        
        return "computer"
   }

 }

    for(let i =1; i <= 5; i++) {
        
         let computerChoice = getComputerChoice();
         let humanChoice = getHumanChoice();

         let winner = playRound(humanChoice, computerChoice) 
            if (winner === "human"){
                 humanScore++
            } else if (winner === "computer") {
                computerScore++
            } else {
                
            }
         
    }

    console.log("Human Score:", humanScore);
    console.log("Computer Score:", computerScore)

    if (humanScore > computerScore){
        console.log("Congratulations, You win!!!");
    } else if (humanScore < computerScore) {
        console.log("You lost this time, Try again.");
    } else{
        console.log("IT IS A TIE!!")
    }
 }

 playGame()





