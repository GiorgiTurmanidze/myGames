var states = ["", "", "", "", "", "", "", "", ""];
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
var currentPlayer = "";
const statusText = document.querySelector('.status');
var gameActive = false;


function showGame1(first) {
    var table = document.getElementById("ttt")
    var items = document.getElementById("text")
    var button1 = document.getElementById("player1")
    var button2 = document.getElementById("player2")
    if (first === 'X') {
        gameActive = true
        table.style.display = "block"
        items.remove()
        button2.remove()
        currentPlayer = "X"
    }
    if (first === 'O') {
        gameActive = true
        table.style.display = "block"
        items.remove()
        button1.remove()
        currentPlayer = "O"
    }
}
// function showGame2(second) {
//     var table = document.getElementById("ttt")
//     var items = document.getElementById("text")
//     var button1 = document.getElementById("player1")
//     var button2 = document.getElementById("player2")
//     if (second) {
//         gameActive = true
//         table.style.display = "block"
//         items.remove()
//         button1.remove()
//         currentPlayer = "O"
//     }
// }


function onSquareClick(clickedSquareEvent) {
    const clickedSquare = clickedSquareEvent.target;
    const clickedSquareIndex = parseInt(
        clickedSquare.getAttribute('data-cell-index')
    );
    if (states[clickedSquareIndex] !== "" || !gameActive) {
        return;
    }
    onSquarePlay(clickedSquareIndex, clickedSquare);
    checkWinning();
}

function onSquarePlay(clickedSquareIndex, clickedSquare) {
    states[clickedSquareIndex] = currentPlayer;
    console.log(states)

    clickedSquare.innerHTML = currentPlayer;
}

const winningMessage = () => {
    return `Player ${currentPlayer}  Won game`
}

function checkWinning() {
    var won = false;
    for (let i = 0; i < winningConditions.length; i++) {
        const condition = winningConditions[i]
        var first = states[condition[0]];
        var second = states[condition[1]];
        var third = states[condition[2]];
        if (first == "" || second == "" || third == "") {
            continue;
        }
        if (first === second && first === third) {
            won = true;
            break;
        }
    }
    if (won) {
        statusText.innerHTML = winningMessage();
        gameActive = false;
    }
    var draw = !states.includes("");
    if (draw) {
        statusText.innerHTML = "The game ends with DRAW";
        gameActive = false;
    }
    changePlayer();
}

function restart() {
    window.location.reload()
    gameActive = false;
    currentPlayer = "";
    states = ["", "", "", "", "", "", "", "", ""];
    document.querySelectorAll('.square').forEach(
        item => {
            item.innerHTML = "";
        }
    )
}

function changePlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

document.querySelectorAll('.square').forEach(item => {
    item.addEventListener('click', onSquareClick)
})

document.querySelector('.restart').addEventListener('click', restart)