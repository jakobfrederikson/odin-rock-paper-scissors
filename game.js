// Getting references to information elements
const resultArea = document.querySelector('#result-area');
const roundWinner = document.querySelector('#result-area-round-winner');
const playerScoreInfo = document.querySelector('#score1');
let score1 = 0;
const computerScoreInfo = document.querySelector('#score2');
let score2 = 0;

// Getting references to buttons
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorBtn = document.querySelector('#scissors');

// Adding event listeners to buttons
rockBtn.addEventListener('click', () => {
    playRound("ROCK", computerPlay());
});

paperBtn.addEventListener('click', () => {
    playRound("PAPER", computerPlay());
});

scissorBtn.addEventListener('click', () => {
    playRound("SCISSORS", computerPlay());
});

const plays = ["ROCK", "PAPER", "SCISSORS"];
function computerPlay()
{
    let randInt = Math.floor(Math.random() * 3);
    return plays[randInt];
}

function playRound(playerSelection, computerSelection)
{
    console.log(playerSelection, computerSelection);
    // if (!plays.includes(playerSelection))
    //     return "Invalid play!";

    if (playerSelection === "ROCK" && computerSelection === "SCISSORS")
    {
        roundWinner.textContent = "You won this round!";
        resultArea.textContent = "Round result: Rock beats scissors!"
        updatePlayerScore();
    }        
    else if (playerSelection === "SCISSORS" && computerSelection === "PAPER")
    {
        roundWinner.textContent = "You won this round!";
        resultArea.textContent = "Round result: Scissors beats paper!";
        updatePlayerScore();
    }
    else if (playerSelection === "PAPER" && computerSelection === "ROCK")
    {
        roundWinner.textContent = "You won this round!";
        resultArea.textContent = "Round result: Paper beats rock!";
        updatePlayerScore();
    }
    else if (playerSelection === computerSelection)
    {
        roundWinner.textContent = "No one wins this round!";
        resultArea.textContent = `Round result: DRAW! You both chose ${playerSelection}`;    }
        
    else
    {
        roundWinner.textContent = "Computer wins this round!"
        resultArea.textContent = `Round result: ${computerSelection} beats ${playerSelection}`;
        score2++;
        computerScoreInfo.textContent = score2;
    }

    checkWin();
}

function updatePlayerScore() 
{
    score1++;
    playerScoreInfo.textContent = score1;
}
function checkWin()
{
    if (score1 === 5 && score2 < 5)
    {
        //player wins
        alert("You won!");
        location.reload();
    }
    else if (score1 < 5 && score2 === 5)
    {
        //computer wins
        alert("You lost!");
        location.reload();
    }
}

function resetGame()
{

}


// Old game code from when this was run in the console
// function game()
// {
//     let playerScore = 0, computerScore = 0;
//     for (let i = 0; i < 5; i++)
//     {
//         const playerSelection = prompt("ROUND " + (i + 1) + ": Enter rock, paper, scissors: ");
//         const computerSelection = computerPlay();

//         let result = playRound(playerSelection.toUpperCase(), computerSelection);
//         console.log(result);

//         if (result.includes("Win"))
//             playerScore++;
//         else if (result.includes("lose"))
//             computerScore++;
//         else if (result.includes("Invalid"))
//             i--;
//     }  

//     if (playerScore > computerScore)
//         console.log("You win! Player Score: " + playerScore + ", Computer Score: " + computerScore)
//     else if (computerScore > playerScore)
//         console.log("You lose! Player Score: " + playerScore + ", Computer Score: " + computerScore)
//     else
//     console.log("Draw! Player Score: " + playerScore + ", Computer Score: " + computerScore)
// }

//game();