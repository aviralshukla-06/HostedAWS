let btn = document.querySelectorAll(".box");
let reset = document.querySelector(".reset-btn");
let newGame = document.querySelector(".new-game");
let containerWinner = document.querySelector(".message-box");
let winnerMesssage = document.querySelector("#winner");

let turnO = true;

const win = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

const winDeclared = () => {
    for (let box of btn) {

        box.disabled = true;
    }
}
const rematch = () => {
    for (let box of btn) {
        box.disabled = false;
        box.innerText = "";
    }
};


btn.forEach((box) => {
    box.addEventListener("click", () => {

        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        winnerOfGame();
    });
});

const winnerOfGame = () => {
    for (let pattern of win) {
        let pos0Val = btn[pattern[0]].innerText;
        let pos1Val = btn[pattern[1]].innerText;
        let pos2Val = btn[pattern[2]].innerText;

        if (pos0Val != "" && pos1Val != "" && pos2Val != " ") {
            if (pos0Val === pos1Val && pos1Val === pos2Val) {
                showWinner(pos0Val);

            }
        }
    }
};


// display winner
const showWinner = (winner) => {
    winnerMesssage.innerText = `Hurrayy! ${winner} has won the game🥰🤩`;
    containerWinner.classList.remove("hide");
    winDeclared();
};

const resetFunction = () => {
    turnO = true;
    rematch();
    containerWinner.classList.add("hide");
}

reset.addEventListener("click", resetFunction);
newGame.addEventListener("click", resetFunction);