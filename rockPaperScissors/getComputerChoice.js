
// function playRound(playerSelection,computerSelection) {
//     console.log(playerSelection,computerSelection)
//     if(computerSelection === "rock" && playerSelection ==="scissors") {console.log("You Lose! " +computerSelection + " beats " + playerSelection)}
//     if(computerSelection === "scissors" && playerSelection ==="paper") {console.log("You Lose! " +computerSelection + " beats " + playerSelection)}
//     if(computerSelection === "paper" && playerSelection ==="rock") {console.log("You Lose! " +computerSelection + " beats " + playerSelection)}
//     if(playerSelection === "rock" && computerSelection ==="scissors") {console.log("You Win! " +playerSelection + " beats " + computerSelection)}
//     if(playerSelection === "scissors" && computerSelection ==="paper") {console.log("You Win! " +playerSelection + " beats " + computerSelection)}
//     if(playerSelection === "paper" && computerSelection ==="rock") {console.log("You Win! " +playerSelection + " beats " + computerSelection)}
//     if(playerSelection === computerSelection ) {console.log("It's a tie!! Computer chose: " + computerSelection)}
//
// }




function playRound(playerSelection,computerSelection) {
    if(playerSelection === computerSelection ) { return "Tie" }

    if( (computerSelection === "rock" && playerSelection ==="scissors") || (computerSelection === "scissors" && playerSelection ==="paper") || (computerSelection === "paper" && playerSelection ==="rock")){
        return "Computer"
    } else {
        return "Player"
    }

    // if((playerSelection === "rock" && computerSelection ==="scissors") || (playerSelection === "scissors" && computerSelection ==="paper") || (playerSelection === "paper" && computerSelection ==="rock")) {
    //     return "Player"
    // }
}

function computerSelection() {
    const options = ["rock","paper","scissors"]
    return options[Math.floor((Math.random() * 3) + 0)]
}

function playerSelection() {
    const options = ["rock","paper","scissors"]
    return options[Math.floor((Math.random() * 3) + 0)]
}

function game(){
    let playerScore = 0
    let computerScore = 0
    let ties = 0

    for(let i = 0; i < 5; i++){
        let result = playRound(playerSelection(),computerSelection())

        console.log("Player choice:", playerSelection(), " Computer choice:", computerSelection(), " Result:", result)

        switch (result){
            case "Player": playerScore++
                break
            case "Computer": computerScore++
                break
            case "Tie": ties++
                break
            default: break
        }
        // if (result === "Player") { playerScore++ }
        // if (result === "Computer") {computerScore++}
        // if (result === "Tie") {ties++}
    }
    console.log("\n","Player score: ", playerScore, '\n', "Computer score: ", computerScore, "\n", "Ties: ", ties)
    console.log("Player score: $(playerScore)")
}

game()
