// imports constant variables
// import { FOOD_SOUND, GAMEOVER_SOUND, MOVE_SOUND, GAMEPLAY_SOUND } from "./constants.js";

// Variables and Constants
let direction = { x: 0, y: 0 };
let speed = 2;
let lastRenderedTime = 0;
let snakeArr = [
    { x: 12, y: 15 },
];
let food = { x: 5, y: 5 };

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
    let board = document.getElementById("board");
    // declared to remove any redundant items from the board
    board.innerHTML = "";
    // Display/Render the snake in the board
    displaySnake(board);
    // Display/Render the food in the board
    displayFood(board);
}

// Function to display snake in the board
function displaySnake(board) {
    snakeArr.forEach((element, index) => {
        let snakeElement = document.createElement("div");
        snakeElement.style.gridRowStart = element.y;
        snakeElement.style.gridColumnStart = element.x;
        if (index === 0) {
            snakeElement.classList.add("snakeHead");
        } else {
            snakeElement.classList.add("snakeBody");
        }
        board.appendChild(snakeElement);
    });
}

// Function to display food in the board
function displayFood(board) {
    let foodElement = document.createElement("div");
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add("food");
    board.appendChild(foodElement);
}

// Main Game Process Starts Here
window.requestAnimationFrame(main);