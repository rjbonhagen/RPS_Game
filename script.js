const result = document.querySelector(".result")
const computerChoice = document.querySelector(".computer")

document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", () => playGame(button.textContent))
})

function getComputerChoice(){
    let n = Math.random()
    let choice = ""
    if (n < .3) {
        choice = "Rock"
    }
    else if (n < .6) {
        choice = "Paper"
    }
    else {
        choice = "Scissors"
    }
    return choice;
}

function playGame(playerChoice) {
    let compChoice = getComputerChoice();
    let won;
    console.log(compChoice)
    if (playerChoice == "Rock") {
        if (compChoice == "Scissors")
            won = true;
        else if (compChoice == "Paper") {
            won = false;
        }

    }
    else if (playerChoice == "Paper") {
        if (compChoice == "Rock")
            won = true;
        else if (compChoice == "Scissors") {
            won = false;
        }
    }
    else if (playerChoice == "Scissors") {
        if (compChoice == "Paper")
            won = true;
        else if (compChoice == "Rock") {
            won = false;
        }
    }

    switch(won) {
        case true:
            result.textContent = "You Won!";
            break;
        case false:
            result.textContent = "You Lost!";
            break;
        case undefined:
            result.textContent = "Tie!";
            break;
    }

    computerChoice.textContent = `Computer chose: ${compChoice}`;


}


