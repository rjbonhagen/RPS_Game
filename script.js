const result = document.querySelector(".result")
const computerChoice = document.querySelector(".computer")
const score = document.querySelector(".score")
let cpu = 0
let player = 0;




document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", () => playGame(button.textContent))})

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

function playGame(choice) {
    let compChoice = getComputerChoice();

    if (choice == "Rock") {
        if (compChoice == "Scissors")
            player++;
        else if (compChoice == "Paper") {
            cpu++;
        }

    }
    else if (choice == "Paper") {
        if (compChoice == "Rock")
           player++;
        else if (compChoice == "Scissors") {
            cpu++
        }
    }
    else if (choice == "Scissors") {
        if (compChoice == "Paper")
            player++;
        else if (compChoice == "Rock") {
            cpu++;
        }
    }

    computerChoice.textContent = `Computer chose: ${compChoice}`;
    if (player == 5) {
        result.textContent = "You Won!"
        player = 0;
        cpu = 0;
    }
    else if (cpu == 5){
        result.textContent = "You Lost!"
        player = 0;
        cpu = 0;

    }
    score.textContent = `Score: ${player} - ${cpu} : You - CPU`;

}    







