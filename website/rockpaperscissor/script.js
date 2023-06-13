var you
var yourScore = 0
var computer
var computerScore = 0
var winConditions = 3
var winnerText = document.getElementById("winner")
var winner = false

var choices = ["rock", "paper", "scissors"]

window.onload = function() {
    for(let i =0; i < 3; i++) {
        let choice = document.createElement("img")
        choice.id = choices[i]
        choice.src = choices[i] + ".png"
        choice.addEventListener("click", selectChoice)
        document.getElementById("choices").append(choice)
    }
}


function selectChoice() {
    if (winner != true) {
        you = this.id
        document.getElementById("your-choice").src = you + ".png"
    
        //computer
        computer = choices[Math.floor(Math.random() * 3)]
        document.getElementById("computer-choice").src = computer + ".png"
    }
    


    //winner
    if (you == computer) {
        yourScore == yourScore
        computerScore == computerScore
    } else {
        if (you == "rock" && winner == false) {
            if (computer == "scissors") {
                yourScore += 1
            }else if (computer == "paper") {
                computerScore += 1
            }
        }
        else if (you == "paper" && winner == false) {
            if (computer == "scissors") {
                computerScore += 1
            }else if (computer == "rock") {
                yourScore += 1
            }
        }
        else if (you == "scissors" && winner == false) {
            if (computer == "rock") {
                computerScore += 1
            }else if (computer == "paper") {
                yourScore += 1
            }
        }
    } 

    if (yourScore == winConditions) {
        winnerText.innerText = "YOU WON!"
        winner = true
        setTimeout(reload, 3000)
    } else if (computerScore == winConditions) {
        winnerText.innerText = "COMPUTER WON!"
        winner = true
        setTimeout(reload, 3000)
    }

    document.getElementById("your-score").innerText = yourScore
    document.getElementById("computer-score").innerText = computerScore
}
function reload() {
    window.location.reload()
}