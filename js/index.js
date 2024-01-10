// imports constant variables
// import { FOOD_SOUND, GAMEOVER_SOUND, MOVE_SOUND, GAMEPLAY_SOUND } from "./constants.js";

// Variables and Constants
let direction = { x: 0, y: 0 };
let speed = 2;
let lastRenderedTime = 0;
let snakeArr = [
    { x: 12, y: 15 },
];

// Function Declarations
function main(cTime) {
    window.requestAnimationFrame(main);
    console.log(`Current Time: ${cTime}`);
    if ((cTime - lastRenderedTime) / 1000 < 1 / speed) {
        return;
    }
    lastRenderedTime = cTime;
    console.log(`Last Rendered Time: ${lastRenderedTime}`);
    gameEngine();
}

function gameEngine() {

    // Display/Render the snake in the board
    let board = document.getElementById("board");
    // declared to remove any redundant items from the board
    board.innerHTML = "";
    //
    snakeArr.forEach((element, index) => {
        let snakeElement = document.createElement("div");
        snakeElement.style.gridRowStart = element.y;
        snakeElement.style.gridColumnStart = element.x;
        snakeElement.classList.add("snake");
        board.appendChild(snakeElement);
    })
}

// Main Game Process Starts Here
window.requestAnimationFrame(main);