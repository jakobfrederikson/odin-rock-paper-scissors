const plays = ["ROCK", "PAPER", "SCISSORS"];

function computerPlay()
{
    let randInt = Math.floor(Math.random() * 3);
    return plays[randInt];
}

function playRound(playerSelection, computerSelection)
{
    if (!plays.includes(playerSelection))
        return "Invalid play!";

    if (playerSelection === "ROCK" && computerSelection === "SCISSORS")
        return "You Win! Rock beats Scissors.";
    else if (playerSelection === "SCISSORS" && computerSelection === "PAPER")
        return "You Win! Scissors beats Paper."
    else if (playerSelection === "PAPER" && computerSelection === "ROCK")
        return "You Win! Paper beats Rock.";
    else if (playerSelection === computerSelection)
        return "Draw! You both chose " + playerSelection + ".";
    else
        return "You lose! " + computerSelection + " beats " + playerSelection + ".";
}

function game()
{
    let playerScore = 0, computerScore = 0;
    for (let i = 0; i < 5; i++)
    {
        const playerSelection = prompt("ROUND " + (i + 1) + ": Enter rock, paper, scissors: ");
        const computerSelection = computerPlay();

        let result = playRound(playerSelection.toUpperCase(), computerSelection);
        console.log(result);

        if (result.includes("Win"))
            playerScore++;
        else if (result.includes("lose"))
            computerScore++;
        else if (result.includes("Invalid"))
            i--;
    }  

    if (playerScore > computerScore)
        console.log("You win! Player Score: " + playerScore + ", Computer Score: " + computerScore)
    else if (computerScore > playerScore)
        console.log("You lose! Player Score: " + playerScore + ", Computer Score: " + computerScore)
    else
    console.log("Draw! Player Score: " + playerScore + ", Computer Score: " + computerScore)
}

game();